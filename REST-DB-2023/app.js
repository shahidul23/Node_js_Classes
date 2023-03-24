const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user.route');
require("./config/db");
const app = express();


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/users",userRoute)

//home page
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/./views/index.html");
});
//wrong route ->error hundalling
app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname+"/./views/error/404.html");
});
//server error
app.use((err,req,res,next)=>{
    res.status(500).sendFile(__dirname+"/./views/error/500.html")
})




module.exports = app;