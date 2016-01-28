var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./db');

router.get('/',function(req,res){
	console.log(req.query);
	var username = req.query.username;
	var location = req.query.location;
	
	

	res.end();
})

module.exports = router;