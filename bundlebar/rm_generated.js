var fs = require('fs');

var COMPILE_INFO = require('./compile_info.js');
var helpers = require('./helpers.js')

console.log('Removing compiled files...');

COMPILE_INFO.forEach(function(fileInfo){
	var link = helpers.resultFilePath(fileInfo[0]);
	fs.unlink(link, (err) => {
	  if (err) {
	  	console.log('Could not delete ' + link);
	  } else {
	  	console.log('Successfully deleted ' + link);
	  }
	});
});