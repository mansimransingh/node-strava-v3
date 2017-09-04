/**
 * Created by austin on 9/18/14.
 */

var fs = require('fs');

//and export
module.exports = function(config) {

    var util = require('./lib/util')(config)
    , oauth = require('./lib/oauth')(config)
    , athlete = require('./lib/athlete')
    , athletes = require('./lib/athletes')
    , activities = require('./lib/activities')
    , clubs = require('./lib/clubs')
    , gear = require('./lib/gear')
    , segments = require('./lib/segments')
    , segmentEfforts = require('./lib/segmentEfforts')
    , streams = require('./lib/streams')
    , uploads = require('./lib/uploads')(config)
    , runningRaces = require('./lib/runningRaces')
    , routes = require('./lib/routes')
    ;

var strava = {};

//assign various api segments to strava object
strava.oauth = oauth;
strava.athlete = athlete;
strava.athletes = athletes;
strava.activities = activities;
strava.clubs = clubs;
strava.gear = gear;
strava.segments = segments;
strava.segmentEfforts = segmentEfforts;
strava.streams = streams;
strava.uploads = uploads;
strava.runningRaces = runningRaces;
strava.routes = routes;

return strava
};
