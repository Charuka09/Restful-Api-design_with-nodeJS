//using for configuring the app

var express = require('express');
var app = express();
var db =  require('./db');

var UserCotroller = require('./users/UserController');
app.use('./Users', UserCotroller);

module.exports = app;