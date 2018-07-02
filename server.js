//Telling app, where to listen

var app = require('./app');
var port = process.env.port || 3000;

var server = app.listen(port,function() {
    console.log('Express server is listning on port '+port);
});