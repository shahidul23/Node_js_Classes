const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;

//check login 
const checkLoggedIn = (req, res, next)=>{
    if(req.isAuthenticated()){
        return res.redirect("/profile");
    }
    next();
}
//check authenticate
const checkAuthenticated = (req, res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

const userRegisterForm = (req, res)=>{
    res.render("register");
}

const userRegister =async (req, res)=>{
    try {
        const user = await User.findOne({
            username:req.body.username,
        });
        if (user) {
            return res.status(400).send("user already exists")
        } else {
            bcrypt.hash(req.body.password, saltRounds, async (err, hash)=>{
                const newUser = new User({
                    username:req.body.username,
                    password:hash
                });
                await newUser.save();
                res.status(201).redirect("/login");
            });  
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const userProfile = (req, res)=>{
    res.render("profile")
}

const userLoginFrom = (req, res)=>{
    res.render("login");
}

const userLogin = ()=>{
    
}

const userLogout = (req,res)=>{
    try {
        req.logout((err)=>{
            if(err){
                return next(err);
            }
            res.redirect("/")
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {userRegisterForm, userRegister,userProfile,
    userLoginFrom, userLogout, checkLoggedIn, checkAuthenticated};