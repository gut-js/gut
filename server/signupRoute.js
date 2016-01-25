var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var db = require('./db');

//sign up for account
router.post('/', function(req, res) {
  console.log('inside signup route');
  console.log('req.body:', req.body);
  var username = req.body.username;
  var password = req.body.password;

  //hash password
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      //store user info
      var user = new db.User({
        username: username,
        password: hash
      });

      console.log('user', user);

      user.save(function(err, user) {
        console.log('inside user.save');
        if (err) {
          console.log("error: ", err);
          res.send(err);
        }
        else {
          console.log('user was saved:', user);
          //create token - this causes an error (TypeError: secret must be a string or buffer)
          // var token = jwt.sign(user, router.get('superSecret'), { expiresInminutes:1440 });
          
          //send token
          res.json({
            success: true,
            message: 'Enjoy your token!',
            // token: token,
            username: user.username,
            password: user.password
          });
        }
      });

    });
  });
});

module.exports = router;