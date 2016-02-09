var request = require('request');
var qs = require('querystring');
var oauthSignature = require('oauth-signature');
var _ = require('lodash');
var n = require('nonce')();
var uberClientId = require('../config').uberClientId;
var uberServerToken = require('../config').uberServerToken;

//connect lat and long to user location and biz location
// var latitude = 34.0418494,
//     longitude = -118.491284;
  
// var partyLatitude = 34.7283405,
//     partyLongitude = -117.994567;

module.exports = function(coord, callback) {
  coord = JSON.parse(coord);
  var latitude = coord.userLatitude;
  var longitude = coord.userLongitude;
  var bizLatitude = coord.bizLatitude;
  var bizLongitude = coord.bizLongitude;
  /* The type of request */
  var httpMethod = 'GET';

  /* The url we are using for the request */
  var url = 'https://api.uber.com/v1/estimates/price';
  

  /* We set the require parameters here */
  var parameters = {
    start_latitude: latitude,
    start_longitude: longitude,
    end_latitude: bizLatitude,
    end_longitude: bizLongitude,
    server_token: uberServerToken
  };

  var paramURL = qs.stringify(parameters);

  /* Add the query string to the url */
  var apiURL = url+'?'+paramURL;

  /* Then we use request to send make the API Request */
  request(apiURL, function(error, response, body) {
    return callback(error, response, body);
  });
}
