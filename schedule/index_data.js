var extData = {
	'navContext' : 'partials/nav_data.js',
	'events' : 'assets/js/events.js',
	'gaContext' : 'partials/ga_data.js'
}

var helpers = require('helpers');

var intData = {
  navContext : {
    'selectedDirectory' : helpers.currentDirectory(__dirname)
  },
  bannerContext : {
  	'bannerName' : 'Schedule'
  }
}

module.exports.extData = extData;
module.exports.intData = intData;
