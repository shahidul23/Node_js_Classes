
const userRoutes = require("express").Router();
const passport = require("passport");
const { userRegister, userLogin, userProfile } = require("../controllers/userController");

userRoutes.post("/register", userRegister);

userRoutes.post("/login", userLogin);

userRoutes.get('/profile', passport.authenticate('jwt', { session: false }),
userProfile
);  


module.exports = userRoutes;