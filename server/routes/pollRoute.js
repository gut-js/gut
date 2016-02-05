var express = require('express');
var router = express.Router();
var cities = require('../cities');
var _ = require('lodash');
var request_yelp = require('../functions/request_yelp')

router.get('/',function(req,res){
	var city = _.shuffle(cities).pop();
	console.log('city',city);
	request_yelp({location:city},function(yelpErr,yelpRes,yelpBody){
		var parsed = JSON.parse(yelpBody);
		console.log('parsed',parsed);
		var businesses = parsed.businesses;
        businesses = _.shuffle(businesses);
        console.log('businesses',businesses);
        for (var i=0; i<businesses.length; i++) {
          console.log(businesses[i].image_url);
          businesses[i].image_url = businesses[i].image_url.slice(0,-6)+'o.jpg';
        }
        res.json(businesses);
	})
	//res.json(_.shuffle(businesses).slice(0,20));
})

module.exports = router;
