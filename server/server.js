var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var bcrypt = require('brypt');

var app = express();
var jsonParser = bodyParser.json();
var port = process.env.PORT || 5679;

//******DATABASE SET UP

var dbURI = 'mongodb://localhost/gut'
mongoose.connect(dbURI);
var Schema = mongoose.Schema;
var userSchema = new Schema ({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	loginMessage: { type: String },
	address: { type: String }
});
userSchema.plugin(uniqueValidator);
var User = mongoose.model('User', userSchema);

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//serving static files
app.use('/', express.static( __dirname + '/../client' ));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(bodyParser.json());

//auth
var jwtSecret = 'thupers3crT$14';
app.set('superSecret', jwtSecret);

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

app.post('/emptyLoginMessage', function(req,res){
	var username = req.body.username;
	User.findOne({username:username},function(err,user){
		user.loginMessage='';
		user.save();
		res.end();
	});
})

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

//sign up for account
app.post('/signup', function(req, res) {
 	var username = req.body.username;
	var password = req.body.password;

	//hash password
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(password, salt, function(err, hash) {

			//store user info
			var user = User({
				username: username,
				password: hash,
				loginMessage: ''
			});

			user.save(function(err, user) {
				if (err) {
					console.log("error: ", err);
					res.send(err);
				}
				else {
					console.log('user was saved:', user);
					//create token
					var token = jwt.sign(user, app.get('superSecret'), { expiresInminutes:1440 });
					//send token
					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: token,
						username: user.username,
						password: user.password
					});
				}
			});

		});
	});
});

//log into account
app.post('/login', function(req, res){

	var username = req.body.username;
	var password = req.body.password;

	authenticateUser(username, password, function(err, user){
	    if (user) {

	    	var loginMessage = user.loginMessage;
	    	user.loginMessage = '';
	    	user.save(function(){});

	      	bcrypt.compare(password, user.password, function(err, loggedin) {
	      		if (loggedin) {
	      			var token = jwt.sign(user, app.get('superSecret'), {
			          expiresInMinutes: 1440 // expires in 24 hours
			        });

			        // return the information including token as JSON
			        res.json({
			          success: true,
			          message: 'Enjoy your token!',
			          token: token,
			          username: username,
			          loginMessage: loginMessage
			        });
	      		} else {
	      			res.send('InvalidPassword');
	      		}
	      	})

	    } else {
	    	res.send('InvalidUser');
	    }
	});
});

app.listen(port, function(){
	console.log('listening on port ' + port);
});
