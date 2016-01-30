var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./db');
var addEdge = require('./addEdge');

router.put('/',function(req,res){
	console.log('inside addfriendRoute');
	//console.log('req.body',req.body);
	var username = req.body.username;
	var friendname = req.body.friendname;
	console.log(username,friendname);
	res.end();
});

module.exports = router;