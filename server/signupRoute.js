var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var db = require('./db');
var app = require('./server');

var getGeolocationData = require('./getGeolocationData');

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
        categories: {test:'test'}
      });

      user.markModified('categories');

      user.save(function(err, user) {
        console.log('inside user.save');
        if (err) {
          console.log("error: ", err);
          res.send(err);
        }
        else {
          console.log('user was saved:', user);
          var token = jwt.sign(user, app.get('superSecret'), { expiresInminutes:1440 });
          
          getGeolocationData().then(function(data){

            console.log('promise resolved');
            console.log('data',data);
            // serve token to client
            res.json({
              success: true,
              message: 'Enjoy your token!',
              token: token,
              username: user.username,
              password: user.password
            });

          })
        }
      });

    });
  });
});

module.exports = router;