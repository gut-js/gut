var express = require('express');
var router = express.Router();

var request_yelp = require('./request_yelp');

router.get('/', function(req, res) {

  // calling yelp api
  request_yelp({location: req.query.location}, function (error, response, body) {
    if (error) {
      console.error(error);
    }
    var parsed = JSON.parse(body);
    var businesses = parsed.businesses;

    for (var i=0; i<businesses.length; i++) {
      console.log(businesses[i].image_url);
      businesses[i].image_url = businesses[i].image_url.slice(0,-6)+'o.jpg';
    }

    console.log('1st businees:',businesses[0]);
    res.json(businesses);
  })

})

module.exports = router;