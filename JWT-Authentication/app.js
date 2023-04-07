const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoute");
const passport = require("passport");
require("./server/config/db_handler");
require("./server/config/passport");

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(passport.initialize());

// home route 
app.get("/",(req, res)=>{
    res.status(200).send("<h1>Welcome to the server</h1>")
});
//use user router
app.use(userRoutes);

app.use((req, res, next)=>{
    res.status(404).json({
        message:"Invalid route",
    });
});
app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).json({
        message:err.message,
    });
})


module.exports = app;