const { check } = require("express-validator");

exports.userRegistationValidation = [
    check("name")
    .trim()
    .notEmpty()
    .withMessage("name is missing")
    .isLength({min:5})
    .withMessage("mane must minimum 5 charter"),
    check("email")
    .trim()
    .notEmpty().withMessage("Email is empty")
    .isEmail().withMessage("is not a valid email"),
    check("password")
    .trim()
    .notEmpty().withMessage("password is empty")
    .isLength({min:8}).withMessage("password must be 8 charter"),
    check("dob")
    .trim()
    .notEmpty().withMessage("dob is empty")
    .isISO8601().toDate().withMessage("not a valid dob")
]
exports.userLoginValidation = [
    check("email")
    .trim()
    .notEmpty().withMessage("Email is empty")
    .isEmail().withMessage("is not a valid email"),
    check("password")
    .trim()
    .notEmpty().withMessage("password is empty")
    .isLength({min:8}).withMessage("password must be 8 charter")
]