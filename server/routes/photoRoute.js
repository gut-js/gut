var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
var db = require('../db');

router.post('/', multer({dest:'./client/static/assets/avatar/'}).single('image'), function(req,res,next){
  console.log('##########req.body in photo upload:', req.body);
  console.log('req.file',req.file);

  var username = req.body.username;
   db.User.findOne({username: username}, function(err, user) {
      if (err) {
        console.log('err finding user');
      }
      else {
        user.avatarUrl = "http://54.200.133.56:8080/static/assets/avatar/" + username;
        user.save(function(){})
      }
    })
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
  var img_path = 'client/static/assets/avatar/' + username; //uploads/bob
  
  next(
    fs.readFile(curr_path, function(error, data) {
      if (error) {
          console.log(error);
          return;
      }

      fs.rename(curr_path, img_path, function(err) {
          if ( err ) console.log('ERROR: ' + err);
          console.log('fs.rename!');
        }
      )
    })
  )

  res.status(204).end();
	
});

module.exports = router;