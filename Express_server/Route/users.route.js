const express = require("express");
const router = express.Router();

router.get("/register",(req, res) => {
    res.send("I am a register request at home page");
    res.end();
});
router.get("/login",(req, res) => {
    res.send("I am a login request at home page");
    res.end();
});

module.exports = router;