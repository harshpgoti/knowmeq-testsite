const User = require('../models/Users');

const express = require('express'),
router = express.Router(),
Users = require('../models/Users')

router.post('/addUserData',(req,res)=>{
    console.log(req.params);
    console.log(req.body);


    
});

module.exports = router;