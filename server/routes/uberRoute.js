var express = require('express');
var router = express.Router();

var request_uber = require('../functions/request_uber');
router.get('/', function(req, res) {
  console.log('req.query.coord: ', req.query.coord);
  var coord = req.query.coord;
  request_uber(coord, function (error, response, body) {
    if (error) {
      console.error(error);
    }
    console.log('got data: ', body);

    res.send(body);
  })
})

module.exports = router;