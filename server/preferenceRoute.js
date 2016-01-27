var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./db');

router.put('/',function(req,res){
	var username = req.body.username;
	var selected = req.body.selected;
	var unselected = req.body.unselected;
	console.log('username',username);
	console.log('selected',selected);
	console.log('unselected',unselected);

	db.User.findOne({username: username}, function(err, user){
      if (err) {
        console.log('err finding user');
        res.send(err);
      }
      else {
        console.log('found user', user);

        selected.forEach(function(item){
        	var categoryName = item[1];
        	if (user.categories[categoryName]){
        		console.log('found category:',categoryName);
        		user.categories[categoryName][0]+=1;
        		user.categories[categoryName][1]+=1;
        	}
        	else {
        		console.log("DIDN'T FIND category:",categoryName);
        		user.categories[categoryName] = [1,1];
        	}
        });

        unselected.forEach(function(item){
        	var categoryName = item[1];
        	if (user.categories[categoryName]){
        		console.log('found category:',categoryName);
        		user.categories[categoryName][1]+=1;
        	}
        	else {
        		console.log("DIDN'T FIND category:",categoryName);
        		user.categories[categoryName] = [0,1];
        	}
        });

        user.markModified('categories');
        user.save(function(err,user){
        	console.log('updated user:',user);
        	res.json(user);
        });
      }
    });

})

module.exports = router;