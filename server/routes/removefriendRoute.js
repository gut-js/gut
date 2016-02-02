var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../db');

router.delete('/',function(req,res){
	var username = req.body.username;
	var friendname = req.body.friendname;

	db.User.findOne({username:username},function(err,user){
		delete user.friends[friendname];
		user.markModified('friends');
		user.save(function(err,user){
			var friendNames = Object.keys(user.friends);
			db.User.find({'username':{$in:friendNames}},function(err,friends){
				res.send(friends);
			});
		});
	})
});

module.exports = router;
