const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req,res) =>{
    //res.send("hello");
    res.sendFile(__dirname+"/views/home.html");
});
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/views/circle.html");
});
app.post("/circle",(req,res)=>{
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`Area of Circle is :${area}`);
});
app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/views/triangle.html");
});
app.post("/triangle",(req,res)=>{
    const base = req.body.base;
    const height = req.body.height;
    const area = 0.5 * base * height;
    res.send(`Area of Triangle is :${area}`);
});

app.listen(port,() =>{
    console.log(`Server running successfully at http://localhost:${port}`);
});