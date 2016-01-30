var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var db = require('./db');
var app = require('./server');
var getGeolocationData = require('./getGeolocationData');
var request_yelp = require('./request_yelp');
var _ = require('lodash');

//sign up for account
router.post('/', function(req, res) {
  console.log('inside signup route');
  var username = req.body.username;
  var password = req.body.password;

  //hash password
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      //store user info
      var user = new db.User({
        username: username,
        password: hash,
        categories: {test:'test'},
        friends: {test:false}
      });

      user.markModified('categories');

      user.save(function(err, user) {
        console.log('inside user.save');
        if (err) {
          console.log("error: ", err);
          res.send(err);
        }
        else {
          console.log('user was saved:', user.username);
          var token = jwt.sign(user, app.get('superSecret'), { expiresInminutes:1440 });
          // // Below is commented out to keep from abusing the Google API during the development phase!
          // getGeolocationData().then(function(data){
          //   var latitude = data.location.lat;
          //   var longitude = data.location.lng;

          //   console.log('latitude',latitude);
          //   console.log('longitude',longitude);

          //   console.log(latitude+','+longitude);

          //   request_yelp({ll:latitude+','+longitude},function(yelpErr,yelpRes,yelpBody){
          //       if (yelpErr) {
          //         console.error(yelpErr);
          //       }
          //       var parsed = JSON.parse(yelpBody);
          //       var businesses = parsed.businesses;
          //       businesses = _.shuffle(businesses);
          //       for (var i=0; i<businesses.length; i++) {
          //         console.log(businesses[i].image_url);
          //         businesses[i].image_url = businesses[i].image_url.slice(0,-6)+'o.jpg';
          //       }

          //       // serve token to client
          //       res.json({
          //         success: true,
          //         message: 'Enjoy your token!',
          //         token: token,
          //         username: user.username,
          //         password: user.password,
          //         businesses:businesses
          //       });
          //   })

          // })   

          var businesses = (require('./businesses'));
          //shuffle poll
          businesses = _.shuffle(businesses);

          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token,
            username: user.username,
            password: user.password,
            businesses: businesses
          });
        }
      });

    });
  });
});

module.exports = router;