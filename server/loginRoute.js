var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

//log into account
router.post('/login', function(req, res){

  var username = req.body.username;
  var password = req.body.password;

  authenticateUser(username, password, function(err, user){
      if (user) {

        var loginMessage = user.loginMessage;
        user.loginMessage = '';
        user.save(function(){});

          bcrypt.compare(password, user.password, function(err, loggedin) {
            if (loggedin) {
              var token = jwt.sign(user, router.get('superSecret'), {
                expiresInMinutes: 1440 // expires in 24 hours
              });

              // return the information including token as JSON
              res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token,
                username: username,
                loginMessage: loginMessage
              });
            } else {
              res.send('InvalidPassword');
            }
          })

      } else {
        res.send('InvalidUser');
      }
  });
});

module.exports = router;