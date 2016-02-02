var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../db');

router.delete('/',function(req,res){
	console.log('inside removefriendRoute, req.body= ',req.body);
	var username = req.body.username;
	var friendname = req.body.friendname;

	db.User.findOne({username:username},function(err,user){
		console.log('friends',user.friends);
		delete user.friends[friendname];
		user.markModified('friends');
		user.save(function(err,user){
			console.log('updated friendlist:',user.friends);
			res.send(friendname);
		});
	})
});

module.exports = router;