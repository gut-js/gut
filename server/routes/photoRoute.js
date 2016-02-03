var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
	destination: function(req, file, callback){
		callback(null, './uploads');
	},
	filename: function(req,file,callback){
		callback(null,file.fieldname+'-'+Date.now());
	}
});

var upload = multer({storage:storage}).single('userPhoto');

router.post('/',function(req,res,next){
	console.log('req',req);
	res.end();
});

module.exports = router;