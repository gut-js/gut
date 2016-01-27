var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./db');

router.put('/',function(req,res){
	var username = req.body.username;
	var selected = req.body.selected;
	var unselected = req.body.unselected;
	console.log('username',username);
	console.log('selected',selected);
	console.log('unselected',unselected);

	db.User.findOne({username: username}, function(err, user){
      if (err) {
        console.log('err finding user');
        res.send(err);
      }
      else {
        console.log('found user', user);
        res.json('found user');
      }
    });

})

module.exports = router;