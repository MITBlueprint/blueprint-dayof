var foodOptions = {
	'keys' : [{
		'name' : 'name',
		'allowEmpty' : false
	},{
		'name' : 'time',
		'allowEmpty' : false
	},{
		'name' : 'description',
		'allowEmpty' : false
	},{
		'name' : 'display',
		'allowEmpty' : false
	}]
}

var requestInfo = {
	'gid' : '1wCkiljdDKA5xKw0-FHyIULbIorb9tucDZOROw8wXEGU',
	'options' : {
		'groupInfo' : {
			'groups' : [{
				'key' : 'Learnathon',
				'groupNum' : 4,
				'options' : foodOptions
			},{
				'key' : 'Hackathon',
				'groupNum' : 6,
				'options' : foodOptions
			}],
			'direction' : 'v'
		},
	}
}

module.exports = requestInfo;