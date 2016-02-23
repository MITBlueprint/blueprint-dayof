var extData = {
	'navContext' : 'partials/nav_data.js',
	'gaContext' : 'partials/ga_data.js',
	'faqs' : 'faq/content.js'
}

var helpers = require('helpers');

var APP_DIR = '../';

var intData = {
  navContext : {
    'selectedDirectory' : helpers.currentDirectory(__dirname),
    'applicationDirectory' : APP_DIR
  },
  bannerContext : {
  	'bannerName' : 'FAQs'
  },
  semanticsContext : {
  	'applicationDirectory' : APP_DIR
  },
  headerContext : {
  	'applicationDirectory' : APP_DIR
  }
}

module.exports.extData = extData;
module.exports.intData = intData;