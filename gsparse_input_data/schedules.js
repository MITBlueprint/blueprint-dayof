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
	'options' : {
		'groupInfo' : {
			'groups' : [{
				'key' : 'Learnathon',
				'groupNum' : 5,
				'options' : scheduleOptions
			},{
				'key' : 'Hackathon',
				'groupNum' : 5,
				'options' : scheduleOptions
			}]
		}
	}
}

module.exports = requestInfo;