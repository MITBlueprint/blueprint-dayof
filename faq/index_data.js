var extData = {
	'navContext' : 'partials/nav_data.js'
}

var helpers = require('helpers');

var intData = {
  navContext : {
    'selectedDirectory' : helpers.currentDirectory(__dirname)
  },
  bannerContext : {
  	'bannerName' : 'FAQs'
  }
}

module.exports.extData = extData;
module.exports.intData = intData;