var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./db');
var request_yelp = require('./request_yelp');
var getGeolocationData = require('./getGeolocaionData');
var getRecommendation = require('./getRecommendation');

router.get('/',function(req,res){
	console.log(req.query);
	var username = req.query.username;
	var location = req.query.location;
	
	db.User.findOne({username:username},function(err,user){
		if (err){
			console.log('err finding user');
			res.send(err);
		}

		if (location){
			console.log('location provided');
			var requestObj = {location:location};
			getRecommendation(requestObj,res,user);
		}

		else {
			console.log('location not provided');
			getGeolocationData().then(function(data){
				
			})
		}

	})
})

module.exports = router;