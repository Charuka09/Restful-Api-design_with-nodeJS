var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true}));
var User = require('./Users');
router.use(bodyParser.json());

//create a new user
router.post('/',function(req,res) {
    User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    },
    function(err, user) {
        if(err)
            return res.status(500).send("There is a problem adding the information to the database");
        res.status(200).send(user);
    });
});

//returns the all users in the database
router.get('/', function(req, res) {
    User.find({} , function(err, users){
        if(err)
            return res.status(500).send("There is a probem finding users");
        res.status(200).send(users);
    })
})

var User = require('./Users');

module.exports = router;