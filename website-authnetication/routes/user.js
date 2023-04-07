const express = require("express");
const { userRegistration, userLogin } = require("../controllers/userController");
const userRouter = express.Router();


userRouter.post("/register", userRegistration);

userRouter.post("/login", userLogin);


module.exports = userRouter;