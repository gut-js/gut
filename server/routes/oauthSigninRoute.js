var express = require('express');
var router = express.Router();

var google = require('googleapis');
var OAuth2Client = google.auth.OAuth2;
var plus = google.plus('v1');

var CLIENT_ID = '1007941048671-mqral0q9jeg17ervhv01gknh7tml237i.apps.googleusercontent.com';
var CLIENT_SECRET = 'smDen4IcdnGxks6QMeTS6J5s';
var REDIRECT_URL = 'http://127.0.0.1:5679/oauthsignin';

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

router.get('/', function(req, res) {
  function getAccessToken(oauth2Client, callback) {
    var url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: 'https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/userinfo.email'
    });
    oauth2Client.getToken(req.query.code, function(err, tokens) {
      oauth2Client.setCredentials(tokens);
      callback();
    });
  }

  getAccessToken(oauth2Client, function() {
    plus.people.get({ userId: 'me', auth: oauth2Client }, function(err, profile) {
      if (err) {
        console.log('An error occured', err);
        return;
      }
      var prof = {
        email: profile.emails[0].value,
        name: profile.name.givenName,
        image: profile.image.url
      }
      res.send(prof);
    });
  })
})

module.exports = router;
