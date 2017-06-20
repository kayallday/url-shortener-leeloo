// define dependencies
const express = require('express');
const bodyParser = require('body-parser');
const utilityDebugTool = require('kay_beard_utility_debug_tool');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// url
app.use('/api/v1', require('./routes/api.js')(express));

// configgy
const port = process.env.PORT || 3000;

<<<<<<< HEAD
const server = app.listen(port, function() {
=======
const server = app.listen(port, function(){
>>>>>>> origin/master
  console.log('Server is running on', port);
});

module.exports = server;
