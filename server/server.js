var express = require('express');
var app = express();

//serving static files
app.use('/', express.static(__dirname+'/../client'));

var port=5679;
app.listen(port, function(){
	console.log('listening on port '+port);
});