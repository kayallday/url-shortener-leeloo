// define dependencies
const express = require('express');
const bodyParser = require('body-parser');
const util = require('../lib/util');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// url
app.use('/api/v1', require('./routes/api.js')(express));

// configgy
const port = process.env.PORT || 3000;

exports.server = app.listen(port, () => {
  util.debug('Server is running on', port);
});
