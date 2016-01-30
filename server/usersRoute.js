var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./db');

router.get('/',function(req,res){
	db.User.find({},function(err,users){
		res.send(users.map(function(user){
			return {_id: user._id, username:user.username};
		}));
	});
})

module.exports = router;