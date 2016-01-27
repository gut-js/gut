var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./db');

router.put('/',function(req,res){
	console.log('inside /preference route');
	res.json('hi');
})

module.exports = router;