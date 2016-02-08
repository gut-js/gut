var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var db = require('../db');
var app = require('../server');
var historyToArray = require('../functions/historyToArray');

//log into account
router.post('/', function(req, res){
  console.log('inside loginRoute');
  var username = req.body.username;
  var password = req.body.password;

  //finds user in db, if exists --> callback
  function authenticateUser(username, password, callback){
    db.User.findOne({username: username}, function(err, user){
      if (err) {
        console.log('err finding user');
        res.send(err);
      }
      else {
        callback(err, user);
      }
    });
  }

  authenticateUser(username, password, function(err, user){
      if (user) {
        var loginMessage = user.loginMessage;
        user.loginMessage = '';
        user.save(function(){});

          bcrypt.compare(password, user.password, function(err, loggedin) {
            if (loggedin) {
              var token = jwt.sign(user, app.get('superSecret'), {
                expiresIn: 1400 // expires in 24 hours
              });
              //console.log('token in login: ', token)
              // serve token to client
              res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token,
                username: username,
                beenTo: historyToArray(user.beenTo),
                loginMessage: loginMessage,
              });
            } else {
              res.json('InvalidPassword');
            }
          })

      } else {
        res.json('InvalidUser');
      }
  });
});

module.exports = router;
