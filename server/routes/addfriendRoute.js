var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../db');

router.put('/',function(req,res){
	console.log('inside addfriendRoute');
	var username = req.body.username;
	var friendname = req.body.friendname;
	db.User.findOne({username:username},function(err,user){
		if(err){
			console.log('err finding user');
			res.send(err);
		}
		console.log('found user: ',username);
		delete user.friends['fuy7'];
		user.friends[friendname]=true;
		user.markModified('friends');
		user.save(function(err,user){
			var friendNames = Object.keys(user.friends);
			console.log('updated friends: ',friendNames);
			db.User.find({'username':{$in:friendNames}},function(err,friends){
				res.send(friends);
			});
		});
		//res.json(user.friends);
	})
});

module.exports = router;