var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../db');
var _ = require('lodash');

router.get('/',function(req,res){
	var username = req.query.username;
	console.log('username',username);
	db.User.findOne({username:username},function(err,user){
		if (err){
			console.log('error finding user: ',err);
		}
		res.json(_.shuffle(Object.keys(user.friends)));
	})
})

module.exports = router;