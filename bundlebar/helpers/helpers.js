module.exports = function (handlebars)  {
	/*
	* Allows extracting a specific index element from an array and then converting it to a time
	*/
	handlebars.registerHelper('arrayElemToTimeWithFormat', function(array, index, format) {
		var num = array[index]
	  return numToTime(num, format);
	});

	/*
	* Allows extracting a specific index element from an array
	*/
	handlebars.registerHelper('arrayElem', function(array, index) {
	  return array[index];
	});

	/*
	* Allows extracting a specific index element from an array
	*/
	handlebars.registerHelper('addIfEq', function(obj, obj2, obj3) {
	  return obj == obj2 ? obj3 : '';
	});

	/*
	* Allows logging to console
	*/
	handlebars.registerHelper('console', function(obj) {
		console.log(JSON.stringify(obj));
	});
};

/*
Takes a float representation of hours and returns a formatted time string

For most part format is based off of https://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx

Supported formats:
	mm - minutes with leading zero
	m - minutes without leading zero
	HH - 24-hour based hour with leading zero
	H - 24-hour based hour without leading zero
	hh - 12-hour based hour with leading zero
	h - 12-hour based hour without leading zero
	tt - am/pm
	t - a/p
	TT - AM/PM
	T - A/P
*/
function numToTime(num, format){
	var minutes = Math.floor((num % 1) * 100 * 0.6).toString();
	var minutesLeadingZero = addLeadingZero(minutes);

	var hour24 = (Math.floor(num) % 24).toString;
	var hour24LeadingZero = addLeadingZero(hour24);

	var hour12 = Math.floor(num) % 12;
	var hour12LeadingZero = addLeadingZero(hour12);

	var ampm = num % 24 > 12 ? "pm" : "am";
	var ampmU = ampm.toUpperCase();

	var formattedTime = format.replace("mm", minutesLeadingZero);
	formattedTime = formattedTime.replace("m", minutes);
	formattedTime = formattedTime.replace("HH", hour24LeadingZero);
	formattedTime = formattedTime.replace("H", hour24);
	formattedTime = formattedTime.replace("hh", hour12LeadingZero);
	formattedTime = formattedTime.replace("h", hour12);
	formattedTime = formattedTime.replace("TT", ampmU);
	formattedTime = formattedTime.replace("T", ampmU.charAt(0));
	formattedTime = formattedTime.replace("tt", ampm);
	formattedTime = formattedTime.replace("t", ampm.charAt(0));

	return formattedTime;
}

/*
Helper to add a leading zero.
*/
function addLeadingZero(timeString){
	return timeString.length > 1 ? timeString : "0" + timeString;
}