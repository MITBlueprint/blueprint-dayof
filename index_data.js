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
  },
  wifi : 'MIT GUEST',
  importantLinks : [{
    'href' : "http://q.hackmit.org",
    'icon' : 'help',
    'content' : 'Mentor Queue'
  },{
    'href' : "//go.hackmit.org/helpdesk",
    'icon' : 'comment',
    'content' : 'HackMIT Helpdesk'
  },{
    'href' : "//apis.hackmit.org",
    'icon' : 'settings',
    'content' : 'API Directory'
  },{
    'href' : "//go.hackmit.org/submit",
    'icon' : 'legal',
    'content' : 'Submit project'    
  }]
}

module.exports.extData = extData;
module.exports.intData = intData;