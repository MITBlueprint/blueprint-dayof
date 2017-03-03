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
	'gid' : '1Z8SOcQdQcmBM-i_5pc76MZQHvwV_JLxMo03uFbQTNsU',
	'options' : {
		'groupInfo' : {
			'groups' : [{
				'key' : 'Learnathon',
				'groupNum' : 4,
				'options' : scheduleOptions
			},{
				'key' : 'Hackathon',
				'groupNum' : 4,
				'options' : scheduleOptions
			}]
		}
	}
}

module.exports = requestInfo;
