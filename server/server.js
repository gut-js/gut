var express = require('express');
var app = express();

//serving static files
app.use('/', express.static( __dirname + '/../client' ));

var port = process.env.PORT || 5679;

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, function(){
	console.log('listening on port ' + port);
});
