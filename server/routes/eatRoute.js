var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../db');
var request_yelp = require('../request_yelp');
var getGeolocationData = require('../getGeolocationData');
var getRecommendation = require('../getRecommendation');

router.get('/',function(req,res){
	console.log('req.query',req.query);
	var location = req.query.location;
	var diners = JSON.parse(req.query.diners)
	console.log('parsed diners: ', diners); //['daisy', 'sss']
	
	db.User.find({
    'username': { $in: diners }
		}, function(err, dinersInfo){
			if (err) {
				console.log('err finding all diners');
				res.send(err);
			}
		  console.log('dinersInfo: ', dinersInfo);
		  if (location) {
		  	var requestObj = {location: location};
		  	getRecommendation(requestObj, res, dinersInfo);
		  }
		  else {
		  	getGeolocationData().then(function(data) {
		  		var latitude = data.location.lat;
		  		var longitude = data.location.lng;
		  		var requestObj = {ll:latitude+','+longitude};
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