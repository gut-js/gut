var express = require('express');
var router = express.Router();
var app = require('../server');
var db = require('../db');

router.put('/',function(req,res){
	console.log('inside historyRoute');
	console.log('req.body: ',req.body);
	var username = req.body.username;
	var restaurantName = req.body.restaurantName;
	var restaurantId = req.body.restaurantId;
	db.User.findOne({username:username},function(err,user){
		if (err){
			res.send(err);
		}

		delete user.beenTo.test;
		user.beenTo[restaurantId]=[restaurantName,'http://www.yelp.com/biz/'+restaurantId];
		user.markModified('beenTo');
		user.save(function(err,user){
			res.send(user.beenTo);
		})
	})
});

module.exports = router;