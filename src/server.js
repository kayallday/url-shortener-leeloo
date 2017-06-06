// define dependencies
var express = require('express');
var body_parser = require ('body-parser');

var app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({
  extended: true,
}));

// url
app.use('/api/v1', require('../routes/api.js')(express));

// configgy
var port = process.env.PORT || 3000;

var server = app.listen(port, function(){
  console.log('Server is running on', port);
});

module.exports = server;
