var request = require('request');
var fs = require('fs');
var helpers = require('helpers')

function GSParse() {}

GSParse.config = {};

GSParse.setConfig = function(config){
	this.config = config;
}

GSParse.run = function(){
	var config = this.config;
	if (typeof config.inputs !== 'undefined') {
		//Batch processing
		var inputs = config.inputs;
		inputs.forEach(function(fileName){
			var filePath = config.input_dir + fileName;
			var requestInfo = require(filePath);
			if (typeof requestInfo.output_url == 'undefined') {
				if (typeof config.output_dir !== 'undefined') {
					//No file level output but found output directory in config
					requestInfo.output_url = config.output_dir + helpers.currentFileName(filePath) + '.js';
				} else {
					console.log('No output could be resolved for input file at ' + filePath);
				}
			}
			if (typeof requestInfo.prepend == 'undefined') {
				if (typeof config.prepend !== 'undefined') {
					//If there was prepend info in config pass it down unless if it has prepend info already
					requestInfo.prepend = config.prepend;
				}
			}
			loadFromSheetsToFile(requestInfo);
		});
	} else {
		//Single processing
		//Currently not supported
	}
}

function loadFromSheetsToFile(info){
	var config = GSParse.config;
	loadFromSheets(info, function(data){
		var filePath = info.output_url;
		var writeData = JSON.stringify(data, null, "\t");
		if (typeof info.prepend !== 'undefined') {
			writeData = info.prepend + writeData;
		}
		fs.writeFile(filePath, writeData, (err) => {
		  if (err) {
		  	console.log(err);
		  	throw err;
		  }
		  console.log("Generated " + filePath)
		});
	});
}

function loadFromSheets(info, callback){
	request('https://spreadsheets.google.com/feeds/list/' + info.gid + '/1/public/values?alt=json', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	var json;
	  	try {
	  		json = JSON.parse(body);
	  	} catch (e) {
	  		console.log('gsparse error: could not parse response as json. Check to see it is published.');
	  		return;
	  	}
	  	var items = json.feed.entry;
	  	var newItems = [];
	  	items.forEach(function(item){
	  		var newItem = {};
	  		//Remove unlrelated keys
	  		for (var key in item) {
	  			if (key.indexOf('$') !== -1) {
	  				var value = item[key];
	  				if (typeof value == "object") {
	  					//If it's a hashmap then data should be last value in there
	  					var valueKeys = Object.keys(value);
	  					var lastkey = valueKeys[valueKeys.length -1];
	  					value = value[lastkey];
	  				}
	  				newItem[key] = value;
	  			}
	  		}
	  		newItems.push(newItem);
	  	});
	  	var res = processResponse(newItems, info.options);
	  	callback(res);
	  }
	})
}

function processResponse(items, options) {
	//Check for format
	var groupInfo = options.groupInfo;
	var data = data;
	if (typeof groupInfo !== 'undefined') {
		var processedData = {};
		var groups = groupInfo.groups;
		var direction = groupInfo.direction;
		if (typeof direction == 'undefined') {
			var columnIndex = 0;
			groups.forEach(function(group){
				var groupKey = group.key;
				var numColumns = group.groupNum;
				var newItems = [];
				var columns = [];
				items.forEach( function(item, index){
					if (index == 0) {
						//Extract column info
						Object.keys(item).forEach(function(columnKey, i){
							if (i >= columnIndex && i < columnIndex + numColumns) {
								columns.push(columnKey)
							}
						});
						columnIndex += numColumns;
					} else {
						var newItem = {};
						var i = 0;
						columns.forEach(function(key){
							var value = item[key];
							if (typeof value == 'undefined') {
								newItem[key] = '';
							} else {
								newItem[key] = item[key];
							}
						});
						newItems.push(newItem);
					}
				});
				processedData[groupKey] = processResponse(newItems, group.options);
			});
		} else {
			var rowIndex = 0;
			groups.forEach(function(group){
				var startIndex = rowIndex;
				var newItems = [];
				var groupKey = group.key;
				while (rowIndex - startIndex < group.groupNum && rowIndex < items.length) {
					newItems.push(items[rowIndex]);
					rowIndex++;
				}
				processedData[groupKey] = processResponse(newItems, group.options)
			});
		}
		return processedData;
	} else {
		var newItems = [];
		items.forEach(function(item){
			var newItem = {};
			var i = 0;
			var isValid = true;
			for (var key in item) {
				if (i < options.keys.length) {
					var newKeyInfo = options.keys[i];
					var newKey = newKeyInfo.name;
					var allowEmpty = newKeyInfo.allowEmpty;
					if (typeof allowEmpty !== "boolean") {
						allowEmpty = true;
					}
					// console.log(item[key])
					if (item[key].length == 0 && !allowEmpty) {
						isValid = false;
					}
					newItem[newKey] = item[key];
				}
				i++;
			}
			if (isValid) {
				newItems.push(newItem);
			}
		});
		return newItems;
	}
}

module.exports = GSParse;