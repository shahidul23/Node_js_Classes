const express = require("express");
const { body, validationResult } = require("express-validator");
const { userRegister, userLogin } = require("../controllers/userController");
const { runValidation } = require("../validation");
const { userRegistationValidation, userLoginValidation } = require("../validation/auth");
const userRoutes = express.Router();


userRoutes.post("/register", userRegistationValidation, runValidation,
// input validation
userRegister
);


userRoutes.post("/login",userLoginValidation,runValidation,userLogin

// input validation 

)

module.exports = userRoutes;