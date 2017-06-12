// define dependencies
const express = require('express');
const body_parser = require ('body-parser');
const utilityDebugTool = require('utility_debug_tool');

const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({
  extended: true,
}));

// url
app.use('/api/v1', require('./routes/api.js')(express));

// configgy
const port = process.env.PORT || 3000;

const server = app.listen(port, function(){
  console.log('Server is running on', port);
});

module.exports = server;
