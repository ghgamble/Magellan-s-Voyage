// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var router = require('./routes');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.use('/', router)

// Creating Server and Listening for Connections \\
var port = process.env.PORT || 3000
app.listen(port, function(err){
  if (!err) console.log('Server running on port ' + port);
  if (err) console.log('Server crashed!')
})
