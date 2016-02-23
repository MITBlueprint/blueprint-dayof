var scheduleOptions = {
	'keys' : [{
		'name' : 'start',
		'allowEmpty' : false
	},{
		'name' : 'end',
		'allowEmpty' : true
	},{
		'name' : 'event',
		'allowEmpty' : true
	},{
		'name' : 'location',
		'allowEmpty' : true
	}]
}

var requestInfo = {
	'gid' : '19NAcIAJ0wCLQ-l7Pzp0i63wpSPCl0pL-rtsuWvfIbMI',
	'filepath' : 'schedules.js',
	'options' : {
		'groupInfo' : {
			'groups' : [{
				'key' : 'learnathon',
				'columns' : 5,
				'options' : scheduleOptions
			},{
				'key' : 'hackathon',
				'columns' : 5,
				'options' : scheduleOptions
			}]
		}
	}
}

module.exports = requestInfo;