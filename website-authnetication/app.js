const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const app = express();



app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//connect databases


app.get("/",(req, res)=>{
    res.status(200).sendFile(__dirname+"/views/index.html");
});
//use in route file
app.use(userRouter);
//route not found
app.use((req, res, next)=>{
    res.status(404).json({
        message: "route not found",
    });
});
// server error 
app.use((err, req, res, next)=>{
    res.status(500).json({
        message:err.message,
        message:"something error",
    });
});


module.exports = app;

