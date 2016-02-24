/* -------------------------------------------------------------
 * BundleBars Specification
 * -------------------------------------------------------------
 * COMPILE_INFO is an array of 1 or 2-tuples:
 *
 * [0] --> file path for the template file that needs compiling : STRING
 * [1] --> file path for the data file thats used in compiling : STRING (OPTIONAL)
 * 
 * If no data file path is included, default data path will be used
 * ex: for 'example/index.hbs' default data file path will be 'example/index_data.js'
 */

var COMPILE_INFO = [
	["index.hbs"],
  ["schedule/index.hbs"],
  ["maps/index.hbs"],
  ["prizes/index.hbs"],
  ["faq/index.hbs"],
  ["learnathon/index.hbs"],
  ["food/index.hbs"]
];

module.exports = COMPILE_INFO;