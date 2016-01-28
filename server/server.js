var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var app = express();
var port = process.env.PORT || 5679;

//auth
var jwtSecret = 'thupers3crT$14';
app.set('superSecret', jwtSecret);

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

module.exports = app;

//serving static files
app.use('/', express.static( __dirname + '/../client' ));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(bodyParser.json());


// routes
app.use('/login', require('./loginRoute'));
app.use('/signup', require('./signupRoute'));
app.use('/yelp', require('./yelpRoute'));
app.use('/preference', require('./preferenceRoute'));

var port = process.env.PORT || 5679;

//middleware
function authenticate(req, res, next){
	//checks for token in request
  	var token = req.body.token || req.query.token || req.headers['x-access-token'];
	  if (token) {


	  	// verify token validity - if valid, next()'' if not, return success: false
	    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
	      if (err) {
	        return res.json({ success: false, message: 'Failed to authenticate token.' });
	      } else {
	        req.decoded = decoded;
	        next();
	      }
	    });

	  } else {
	    return res.status(403).send({
	        success: false,
	        message: 'No token provided.'
	    });
	}
}

//maintain logged-in status upon refresh
app.post('/authenticate', function(req, res) {
	var token = req.body.token || req.query.token || req.headers['gut-token'];
	var decoded = jwt.decode(token);
	var username = decoded._doc.username;
	User.findOne({username: username}, function (err, username) {
		if (err) {
			res.send('InvalidToken');
		} else {
			res.json({username: username});
		};
	});
})

app.listen(port, function(){
	console.log('listening on port ' + port);
});


