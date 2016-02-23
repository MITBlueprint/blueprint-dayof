var request = require('request');
var fs = require('fs');

var DATA_DIRECTORY = 'gsdata/'
var options = {
	'keys' : [{
		'name' : 'place',
		'allowEmpty' : false
	},{
		'name' : 'prize',
		'allowEmpty' : false
	}]
}

var prizeSheetInfo = {
	'gid' : '1VZBvhq-4vkq_W6qzTsay_WnRcbui64KXtDX5lC6DWGo',
	'options' : {
		'keys' : [{
			'name' : 'place',
			'allowEmpty' : false
		},{
			'name' : 'prize',
			'allowEmpty' : false
		}]
	}
}

var scheduleOptions = {
	'keys' : [{
		'name' : 'start',
		'allowEmpty' : false
	},{
		'name' : 'end',
		'allowEmpty' : true
	},{
		'name' : 'event',
		'allowEmpty' : true
	},{
		'name' : 'location',
		'allowEmpty' : true
	}]
}

var scheduleSheetInfo = {
	'gid' : '19NAcIAJ0wCLQ-l7Pzp0i63wpSPCl0pL-rtsuWvfIbMI',
	'filepath' : 'schedules.js',
	'options' : {
		'groupInfo' : {
			'groups' : [{
				'key' : 'learnathon',
				'columns' : 5,
				'options' : scheduleOptions
			},{
				'key' : 'hackathon',
				'columns' : 5,
				'options' : scheduleOptions
			}]
		}
	}
}

var DATA_PREPEND = 'module.exports = ';

function loadFromSheetsToFile(info){
	loadFromSheets(info, function(data){
		var filePath = DATA_DIRECTORY + info.filepath;
		var writeData = DATA_PREPEND + JSON.stringify(data);
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
		var columnIndex = 0;
		groups.forEach(function(group){
			var groupKey = group.key;
			var numColumns = group.columns;
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

loadFromSheetsToFile(scheduleSheetInfo);
// https://spreadsheets.google.com/feeds/list/1VZBvhq-4vkq_W6qzTsay_WnRcbui64KXtDX5lC6DWGo/1/public/values?alt=json