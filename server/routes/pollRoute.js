var express = require('express');
var router = express.Router();
var businesses = require('../businesses');
var _ = require('lodash');

router.get('/',function(req,res){
	res.json(_.shuffle(businesses).slice(0,20));
})

module.exports = router;
