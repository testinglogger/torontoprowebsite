const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require('../config/auth') 
const Project = require("../models/project");
const User = require("../models/user");

//login page
router.get('/', (req,res)=>{
    res.render('login');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})
router.get('/dashboard',ensureAuthenticated,(req,res)=>{
    User.find({}, (err, users) => { 
        req.users = users;
    }); 
    Project.find({'user_id' : req.user._id}).exec((err,projects)=>{
        res.render('dashboard',{
            user: req.user,
            projects: projects,
            users: req.users
        });  
    })
})

// delete
router.get('/delete/:id',(req,res)=>{
    Project.deleteMany({'user_id' : req.params.id}, function(err) {
        res.redirect("/dashboard");
     });
     
})


module.exports = router; 