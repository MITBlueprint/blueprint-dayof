/* -------------------------------------------------------------
 * HackMIT Event List Specification
 * -------------------------------------------------------------
 * HMIT_EVTS_YEAR is the year these events take place on.
 * HMIT_EVTS is an array of 5-tuples:
 *
 * [0] --> start time relative to midnight Saturday (in hours)
 * [1] --> end time ""
 * [2] --> Brief event title/description
 * [3] --> Brief location of the event
 * [4] --> event type
 *           0: general event
 *           1: workshop/tech talk/etc
 *           2: food event
 */
var EVTS_YEAR = 2015;

var EVTS_FULL = {
  "General Events" : {
    "Saturday" : {
      "offset" : 0,
      "events" : [
        [8.5, 10.25, "Check-in", "Tent", 0],
        [8, 10, "Breakfast", "Tent", 2]
      ]
    },
    "Sunday" : {
      "offset" : 0,
      "events" : [
        [8, 10, "Check-in", "Tent", 0],
        [8, 10, "Breakfast", "Tent", 2]
      ]
    }
  },
  "Workshops, Tech Talks, and Fireside Chats" : {
    "Friday" : {
      "offset" : 0,
      "events" : [
        [8.15, 10, "Check-in", "Tent", 0],
        [8, 10, "Breakfast", "Tent", 2]
      ]
    }
  }
}

var EVTS = collapseEvents(EVTS_FULL);

function collapseEvents(events){
  var allEvents = [];
  for (var eventType in events) {
    var timeSections = events[eventType];
    for (var timeSection in timeSections) {
      var sectionInfo = timeSections[timeSection];
      var sectionEvents = sectionInfo["events"];
      allEvents = allEvents.concat(sectionEvents);
    }
  }
  return allEvents;
}

if (typeof module != 'undefined') {
  module.exports = EVTS_FULL;
}