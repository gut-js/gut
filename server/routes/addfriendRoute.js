var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../db');

router.put('/',function(req,res){
	console.log('inside addfriendRoute');
	console.log('req.body',req.body);
	var username = req.body.username;
	var friendname = req.body.friendname;
	console.log(username,friendname);
	db.User.findOne({username:username},function(err,user){
		if(err){
			console.log('err finding user');
			res.send(err);
		}
		console.log('found user');
		delete user.friends['test'];
		console.log('friends:',user.friends);
		user.friends[friendname]=true;
		user.markModified('friends');
		user.save(function(err,user){
			console.log('updated friendlist:',user.friends)
		})
		res.json(user.friends);
	})
});

module.exports = router;