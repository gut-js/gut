var express = require('express');
var router = express.Router();

var request_uber = require('../functions/request_uber');
router.get('/', function(req, res) {
  request_uber('', function (error, response, body) {
    if (error) {
      console.error(error);
    }
    console.log('got data: ', body);

    res.send(body);
  })
})

module.exports = router;