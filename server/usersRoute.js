var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./db');

router.get('/',function(req,res){
	console.log('inside usersRoute');
	res.end();
})

module.exports = router;