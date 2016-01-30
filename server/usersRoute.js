var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var _ = require('lodash');
var db = require('./db');

router.get('/',function(req,res){
	var filterName = req.query.username;
	db.User.find({},function(err,users){
		users = users.filter(function(user){
			return user.username!==filterName;
		});
		var mappedUsers = users.map(function(user){
			return {_id: user._id, username:user.username}
		});
		res.send(_.shuffle(mappedUsers));
	});
})

module.exports = router;