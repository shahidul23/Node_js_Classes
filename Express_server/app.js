const express = require("express");
const userRouter = require('./Route/users.route');
const app = express();

app.use("/api/user",userRouter);

app.get("/",(req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/index.html")
});
app.use("/register",(req, res) => {
    // res.status(200).json({
    //    message : "i am register page",
    //    statusCode : 200,
    // });
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/register.html")
    //res.redirect("/login");
});
app.use("/login",(req, res) => {
    res.cookie("name","shahidul");
    res.cookie("age","30");
    //res.clearCookie("name");
    res.append("id","1001010100");
    res.end();
});

 app.use((req,res) => {
    res.send("404 page not found");
    res.end();
 });

 //test route for postman

// app.post("/",(req, res) => {
//     res.send("I am a post request at home page");
//     res.end();
//  });
//  app.put("/",(req, res) => {
//     res.send("I am a put request at home page");
//     res.end();
//  });
//  app.delete("/",(req, res) => {
//     res.send("I am a delete request at home page");
//     res.end();
//  });
//  app.patch("/",(req, res) => {
//     res.send("I am a patch request at home page");
//     res.end();
//  });

module.exports = app;