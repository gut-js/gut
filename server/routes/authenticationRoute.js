var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var db = require('../db');
var app = require('../server');

// authenticate user
router.post('/', function(req, res){
  var token = req.body.token || req.query.token || req.header['x-access-token'];
  var decoded = jwt.decode(token);
  var username = decoded._doc.username;

  db.User.findOne({username: username}, function(err, username){
    if (err) {
      res.send('InvalidToken');
    } else {
      res.json({username: username});
    }
  });
});

module.exports = router;
