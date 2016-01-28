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
		console.log('found user: ',user);

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
				var weight = Math.pow(sum/categories.length+1,2);

				business.weight = weight;
			});

			businesses.forEach(function(business){
				console.log(business.name,business.weight);
			});
			// for (var i=0; i<businesses.length; i++){
			// 	console.log(businesses[i].name);
			// }


			res.end();
		})


	})
})

module.exports = router;