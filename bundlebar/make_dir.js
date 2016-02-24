var INITIAL_FILES = [
	'index.hbs',
	'index_data.js'
];

var fs = require('fs');

if (process.argv.length < 3) {
	console.log('No directory name given');
	return;
}

var dirname = process.argv[2];

fs.mkdir(dirname,function(e){
  if(!e){
    console.log(dirname + ' directory made');
    createInitialFiles();
  } else if (e && e.code === 'EEXIST') {
  	console.log('Error: ' + dirname + ' directory already exists');
  } else {
    console.log('uncaught error making directory ' + dirname);
  }
});

function createInitialFiles () {
	INITIAL_FILES.forEach(function(fileName){
		var fileData = '';
		var filePath = dirname + '/' + fileName;
		fs.writeFile(filePath, fileData, (err) => {
		  if (err) {
		  	console.log('Could not generate ' + fileName + ' in ' + dirname + ' directory');
		  } else {
		  	console.log("Generated " + filePath)
		  }
		});
	});
}