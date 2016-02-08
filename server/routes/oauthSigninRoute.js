var express = require('express');
var router = express.Router();
var db = require('../db');
var jwt = require('jsonwebtoken');
var _ = require('lodash');
var app = require('../server');

var google = require('googleapis');
var OAuth2Client = google.auth.OAuth2;
var plus = google.plus('v1');
var cities = require('../cities');

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
      var username = profile.emails[0].value,
          firstname = profile.name.givenName,
          lastname = profile.name.familyName,
          email = profile.emails[0].value,
          gravatarUrl = profile.image.url;

      db.User.findOne({username: username}, function(err, foundUser){
        console.log('err:', err);
        console.log('foundUser:', foundUser);
        if (foundUser === null) {
          console.log('new user')
          var user = new db.User({
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            categories: {test:'test'},
            friends: {test:false},
            beenTo: {test:false},
            gravatarUrl: gravatarUrl
          });

          user.markModified('categories');
          user.markModified('beenTo');
          console.log('user:', user);
          user.save(function(err, user) {
            if (err) {
              console.log('err saving');
              res.send(err)
            } else {
              console.log('inside save');
              var city = _.shuffle(cities).pop();
              var token = jwt.sign(user, app.get('superSecret'), { expiresInminutes:1440 });
              request_yelp({location:city},function(yelpErr,yelpRes,yelpBody){
              var parsed = JSON.parse(yelpBody);
              var businesses = parsed.businesses;
              businesses = _.shuffle(businesses);
              for (var i=0; i<businesses.length; i++) {
                businesses[i].image_url = businesses[i].image_url.slice(0,-6)+'o.jpg';
              }
              res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                businesses:businesses
              });//end of res.json
            })//end of request_yelp
            }
          })
        } else { // not a new user
          db.User.findOne({username: username}, function(err, user){
            if (err) {
              console.log('err finding user');
              res.send(err);
            } else {
              var token = jwt.sign(user, app.get('superSecret'), {expiresIn: 1400});
              res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token,
                username: username,
                beenTo: user.beenTo
              });
            }
          })
        }
      })
    });
  })
})

module.exports = router;
