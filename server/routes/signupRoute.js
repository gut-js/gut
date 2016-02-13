var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var _ = require('lodash');
var gravatar = require('gravatar');

var db = require('../db');
var app = require('../server');
var getGeolocationData = require('../functions/getGeolocationData');
var request_yelp = require('../functions/request_yelp');
var cities = require('../cities');

//sign up for account
router.post('/', function(req, res) {
  console.log('inside signup route');
  console.log('req.body:',req.body);
  var username = req.body.username;
  var password = req.body.password;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;

  var gravatarUrl = 'http:'+gravatar.url(email, {s: '200'});

  //hash password
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      //store user info
console.log('inside bcrypt db:', db);
      var user = new db.User({
        username: username,
        password: hash,
        firstname: firstname,
        lastname: lastname,
        email: email,
        categories: {test:'test'},
        friends: {fuy7:false},
        beenTo: {test:false},
        gravatarUrl: gravatarUrl,
        searchTerm: username+firstname+lastname,
        avatarUrl: "http://54.200.133.56:8080/static/assets/default_pea.png"
      });

      user.markModified('categories');
      user.markModified('beenTo');

      user.save(function(err, user) {
        console.log('inside user.save');
        if (err) {
          console.log("error: ", err);
          res.send(err);
        }
        else {
          console.log('user was saved:', user);
          var token = jwt.sign(user, app.get('superSecret'), { expiresInminutes:1440 });

          var city = _.shuffle(cities).pop();
          request_yelp({location:city},function(yelpErr,yelpRes,yelpBody){
            if (yelpErr){
              console.log('yelp error');
              res.json(yelpErr);
            }
            var parsed = JSON.parse(yelpBody);
            var businesses = parsed.businesses;
                businesses = _.shuffle(businesses);
                for (var i=0; i<businesses.length; i++) {
                  if (businesses[i].image_url){
                    businesses[i].image_url = businesses[i].image_url.slice(0,-6)+'o.jpg';
                  }
                }
                res.json({
                  success: true,
                  message: 'Enjoy your token!',
                  token: token,
                  username: user.username,
                  firstname: user.firstname,
                  lastname: user.lastname,
                  businesses:businesses,
                  avatarUrl: "../static/assets/default_pea.png"
                });//end of res.json
          })//end of request_yelp
        }//end of else
      })//end of user.save
    });
  });
});

module.exports = router;
