var express = require('express');
var router = express.Router();
var cities = require('../cities');
var _ = require('lodash');
var request_yelp = require('../functions/request_yelp')

router.get('/',function(req,res){

	var business100 = [];
	// serving 100 businesses (alternate way)
	cities = _.shuffle(cities);
	for (var i=0; i<5; i++){
		console.log('city: ',cities[i]);
		request_yelp({location:cities[i]},function(yelpErr,yelpRes,yelpBody){
			if (yelpErr){
				console.log('error fetching yelp data');
				res.json(yelpErr);
			}
			var parsed = JSON.parse(yelpBody);
			var business20 = parsed.businesses;
			for (var j=0; j<business20.length; j++){
				business100.push(business20[j]);
			}
			if (business100.length>=100){
				for (var k=0; k<business100.length; k++){
					if (business100[k].image_url){
						business100[k].image_url = business100[k].image_url.slice(0,-6)+'o.jpg';
					}
				}
				res.json(_.shuffle(business100));
			}
		})
	}


	// // serving 20 businesses (our original way)
	// var city = _.shuffle(cities).pop();
	// request_yelp({location:city},function(yelpErr,yelpRes,yelpBody){
	// 	if (yelpErr){
	// 		console.log('error fetching yelp data');
	// 		res.json('error fetching yelp data');
	// 	}
	// 	var parsed = JSON.parse(yelpBody);
	// 	var businesses = parsed.businesses;
 //        businesses = _.shuffle(businesses);
 //        for (var i=0; i<businesses.length; i++) {
 //          console.log(businesses[i].image_url);
 //          businesses[i].image_url = businesses[i].image_url.slice(0,-6)+'o.jpg';
 //        }
 //        res.json(businesses);
	// })
})

module.exports = router;
