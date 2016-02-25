var extData = {
	'navContext' : 'partials/nav_data.js',
	'gaContext' : 'partials/ga_data.js'
}

var helpers = require('helpers');

var APP_DIR = '../';

var intData = {
  navContext : {
    'selectedDirectory' : helpers.currentDirectory(__dirname),
    'applicationDirectory' : APP_DIR
  },
  bannerContext : {
  	'bannerName' : 'Learnathon'
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

var webCurr = {
  "description" : "Walk away with your own finished personal website and blog by the end of the day!",
  "sessions" : [{
    "name" : 'How the Internet Works + HTML/CSS'
  },{
    "name" : 'Beginning Javascript/JQuery'
  },{
    "name" : 'Intro to Backend with Firebase'
  },{
    "name" : 'Flex session + Lightning Talks'
  }]
}

var iosCurr = {
  "description" : "iOS: Learn to make your own iOS app by building a Pokemon clone and notes app in Swift!",
  "sessions" : [{
    "name" : "Gotta Code 'Em All (Build your own Pokemon clone in Swift)"
  },{
    "name" : 'Beginning Swift & Xcode Tutorial'
  },{
    "name" : 'Intermediate iOS App Development'
  },{
    "name" : 'Flex session + Lightning Talks'
  }]
}
