const express = require("express");
const passport = require("passport");
const { userRegisterForm, userProfile, userLoginFrom, userRegister,
    userLogout, checkLoggedIn, checkAuthenticated } = require("../controllers/userController");
const userRouter = express.Router();

//  register : get
userRouter.get("/register", userRegisterForm);

//  register : post
userRouter.post("/register",userRegister);
//  login : get 
userRouter.get("/login",checkLoggedIn,userLoginFrom);
//  login : post
userRouter.post(
    "/login",
    passport.authenticate("local",{
        failureRedirect:"/login",
        successRedirect:"/profile",
    })
);
//  Profile protected route
userRouter.get("/profile",checkAuthenticated,userProfile);
//logout route
userRouter.get("/logout", userLogout);


module.exports = userRouter;