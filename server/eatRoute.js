var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./db');
var request_yelp = require('./request_yelp');

router.get('/',function(req,res){
	console.log(req.query);
	var username = req.query.username;
	var location = req.query.location;
	
	db.User.findOne({username:username},function(err,user){
		if (err){
			console.log('err finding user');
			res.send(err);
		}

		request_yelp({location:location},function(yelpErr,yelpRes,yelpBody){
			if (yelpErr){
				console.log('error finding businesses');
				res.send(yelpErr);
			}
			var parsed = JSON.parse(yelpBody);
			var businesses = parsed.businesses;

			businesses.forEach(function(business){
				var categories = business.categories;
				var sum = 0;
				categories.forEach(function(category){
					var categoryName = category[1];
					if (user.categories[categoryName]){
						var numerator = user.categories[categoryName][0];
						var denominator = user.categories[categoryName][1];
						sum+=numerator/denominator;
					}
					else {
						sum+=0.5;
					}
				})
				var weight = Math.pow(sum/categories.length+1,4);
				business.weight = weight;
			});

			var totalWeight = 0;
			businesses.forEach(function(business){
				totalWeight += business.weight;
			});

			var recommendations = [];
			while (businesses.length) {
				var index = Math.random()*totalWeight;
				var current = 0;
				for (var i=0; i<businesses.length; i++){
					current+=businesses[i].weight;
					if (current>index) {
						//var chosen = busineeses[i];
						break;
					}
				}
				totalWeight -= businesses[i].weight;
				recommendations.push(businesses.splice(i,1)[0]);
			};

			console.log('recommended order:');
			recommendations.forEach(function(business){
				console.log(business.name,business.weight);
			});

			res.json(recommendations);
		})


	})
})

module.exports = router;