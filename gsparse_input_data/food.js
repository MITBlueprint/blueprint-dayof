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
	'gid' : '1IZfBX1up4HXBjGX_Wup3I1Scsp-kSoCPFegcJk2FUM0',
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
