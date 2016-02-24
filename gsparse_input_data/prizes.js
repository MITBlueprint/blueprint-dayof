var requestInfo = {
	'gid' : '1VZBvhq-4vkq_W6qzTsay_WnRcbui64KXtDX5lC6DWGo',
	'output_url' : 'assets/js/sponsor_data.js',
	'prepend' : 'var SPONSOR_PRIZE_DATA = ',
	'options' : {
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
}

module.exports = requestInfo;