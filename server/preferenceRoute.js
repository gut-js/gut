var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./db');

router.put('/',function(req,res){
	console.log('inside /preference route');
	console.log('req.body',req.body);
	var username = req.body.username;
	var selected = req.body.selected;
	var unselected = req.body.unselected;


})

module.exports = router;