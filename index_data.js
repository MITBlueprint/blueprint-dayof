var extData = {
	'navContext' : 'partials/nav_data.js',
	'gaContext' : 'partials/ga_data.js'
}

var APP_DIR = './';

var intData = {
  navContext : {
    'selectedDirectory' : APP_DIR,
    'applicationDirectory' : APP_DIR
  },
  bannerContext : {
  	'bannerName' : 'WELCOME TO BLUEPRINT'
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