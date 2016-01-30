var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./db');
var addEdge = require('./addEdge');

router.put('/',function(req,res){
	console.log('inside addfriendRoute');
	
	res.end();
});

module.exports = router;