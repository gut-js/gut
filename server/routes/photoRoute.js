var express = require('express');
var router = express.Router();
var multer = require('multer');

router.post('/', multer({dest:'../uploads/'}).single('userPhoto'),function(req,res,next){
	console.log('req.file',req.file);
	res.status(204).end();
});

module.exports = router;