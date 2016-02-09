var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../db');
var request_yelp = require('../functions/request_yelp');
var getGeolocationData = require('../functions/getGeolocationData');
var getRecommendation = require('../functions/getRecommendation');

router.get('/',function(req,res){
	console.log('xxx', req.query.diners);
	console.log('xxx', req.query.location);
	var diners = JSON.parse(req.query.diners)
	var location = JSON.parse(req.query.location);

	db.User.find({
    'username': { $in: diners }
		}, function(err, dinersInfo){
			if (err) {
				console.log('err finding all diners');
				res.send(err);
			}
			if (Array.isArray(location)) {
				var requestObj = {ll:location[0]+','+location[1]};
				console.log('requestObj:', requestObj);
				getRecommendation(requestObj, res, dinersInfo);
			} else if (location) {
		  	var requestObj = {location: location};
		  	getRecommendation(requestObj, res, dinersInfo);
		  } else {
		  	getGeolocationData().then(function(data) {
		  		var latitude = data.location.lat;
		  		var longitude = data.location.lng;
		  		var requestObj = {ll:latitude+','+longitude};
		  		console.log('requestObj:', requestObj);
		  		getRecommendation(requestObj, res, dinersInfo);
		  	})
		  }
	});
	// db.User.findOne({username:username},function(err,user){
	// 	if (err){
	// 		console.log('err finding user');
	// 		res.send(err);
	// 	}

	// 	if (location){
	// 		console.log('location provided');
	// 		var requestObj = {location:location};
	// 		getRecommendation(requestObj,res,user,diners); //adds array of diners which includes user as diners[0]
	// 	}

	// 	else {
	// 		console.log('location not provided');
	// 		getGeolocationData().then(function(data){
	// 			var latitude = data.location.lat;
	// 			var longitude = data.location.lng;
	// 			var requestObj = {ll:latitude+','+longitude};
	// 			getRecommendation(requestObj,res,user,diners); // see above
	// 		})
	// 	}
	// })
})

module.exports = router;
