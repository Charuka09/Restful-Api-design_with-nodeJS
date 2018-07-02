//using to store your database connections

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/RestfulAPIWithNode' , (err) => {
    if(!err)
        console.log("MongDb connection successfull");
    else
        console.log('Error in DB connection : ' + JSON.stringify(err ,  undefined ,2));        
});