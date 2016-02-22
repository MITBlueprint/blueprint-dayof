/*
 * Function should output file path of where the compiled html file
*/
module.exports.resultFilePath = function (templateFilePath){
	var filePathComponents = templateFilePath.split('.');
	if (filePathComponents.length == 0) {
		throw 'Invalid input file paths';
	}
	filePathComponents[filePathComponents.length - 1] = 'html';
	return filePathComponents.join('.');
};