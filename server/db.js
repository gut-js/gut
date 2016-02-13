var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var db = {};

//******DATABASE SET UP

db.dbURI = 'mongodb://54.200.133.56:27017/gut';
mongoose.connect(db.dbURI);
db.Schema = mongoose.Schema;
db.userSchema = new db.Schema ({
  username: { type: String, required: true, unique: true },
  password: { type: String },
  firstname: {type: String},
  lastname: {type: String},
  categories: {},
  friends: {},
  beenTo: {},
  email: { type: String },
  gravatarUrl: { type: String },
  searchTerm: {type: String},
  avatarUrl: {type: String}
});
db.userSchema.plugin(uniqueValidator);
db.User = mongoose.model('User', db.userSchema);

module.exports = db;
