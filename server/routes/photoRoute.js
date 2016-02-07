var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');

router.post('/', multer({dest:'./uploads/'}).single('image'),function(req,res,next){
  console.log('##########req.body in photo upload:', req.body);
  console.log('req.file',req.file);

  var username = req.body.username;
  var img_mimetype = req.file.mimetype; //'image/png'
  var curr_path = req.file.path; //'uploads/123'
  var curr_filename = req.file.filename; //'123'
  var img_type;
  console.log('username and mimetype', username, img_mimetype);
  for (var i = 0 ; i < img_mimetype.length; i++ ){
    if (img_mimetype[i] === '/') {
      img_type = img_mimetype.slice(i+1);
    }
  }
  var img_path = 'uploads/' + username + "." + img_type; //uploads/123.png

  next(
    fs.readFile(curr_path, function(error, data) {
      if (error) {
          console.log(error);
          return;
      }

      fs.rename(curr_path, img_path, function(err) {
          if ( err ) console.log('ERROR: ' + err);
        }
      )}
    )
  )

  

	res.status(204).end();
});

module.exports = router;