var prizeOptions = {
	'keys' : [{
		'name' : 'title',
		'allowEmpty' : false
	},{
		'name' : 'amount',
		'allowEmpty' : false
	},{
		'name' : 'qty',
		'allowEmpty' : true
	},{
		'name' : 'price',
		'allowEmpty' : true
	},{
		'name' : 'description',
		'allowEmpty' : true
	}]
}

var requestInfo = {
	'gid' : '1VZBvhq-4vkq_W6qzTsay_WnRcbui64KXtDX5lC6DWGo',
	'options' : {
		'groupInfo' : {
			'groups' : [{
				'key' : 'experienced',
				'groupNum' : 3,
				'options' : prizeOptions
			},{
				'key' : 'rookie',
				'groupNum' : 3,
				'options' : prizeOptions
			}],
			'direction' : 'v'
		}
	}
}

module.exports = requestInfo;