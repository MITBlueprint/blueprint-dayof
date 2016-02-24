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
  }],
  socialMedias : [{
    'href' : "//facebook.com/mitblueprint",
    'class' : 'facebook',
    'iconClass' : 'facebook',
    'displayText' : 'Facebook'
  },{
    'href' : "//twitter.com/mitblueprint",
    'class' : 'twitter',
    'iconClass' : 'twitter',
    'displayText' : 'Twitter'
  }],
  contacts : [{
    'href' : "tel:774-290-4225",
    'iconClass' : 'phone',
    'content' : '(774) 290-HACK'
  },{
    'href' : "mailto:blueprint@hackmit.org",
    'iconClass' : 'mail',
    'content' : 'blueprint@hackmit.org'
  },{
    'href' : "//ist.mit.edu/mit-mobile/android-ios",
    'iconClass' : 'tablet',
    'content' : 'MIT Mobile App'
  }]
}

module.exports.extData = extData;
module.exports.intData = intData;