const express = require("express");
const app = express();

//json data received 
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// app.post("/user",(req,res) => {
// //    const name = req.body.name;
// //    const age = req.body.age;
//     const {name, age} = req.body;
//    res.send(`Student name is : ${name},and age is :${age}`);
// });

//form data get in server
// app.get("/register",(req,res) =>{
//     res.sendFile(__dirname + "/views/register.html");
// })

// query parameter 
// app.get("/",(req,res) => {
//     const {id,name} = req.query;
//     // const id = req.query.id;
//     // const name = req.query.name;
//     //http://localhost:3001/?id=121
//     //res.send(`Student id is : ${id}`);
//     //id + name  http://localhost:3001/?id=121&name=shahidul
//     res.send(`Student name is : ${name}, id is :${id}`);
// });

// route parameter 

// app.get("/userId/:id",(req,res) => {
//     //http://localhost:3001/userId/234
//    const id = req.params.id;
//    res.send(`<h1>Student id is : ${id}</h1>`)
// });

//route multiple parameter 
// app.get("/userId/:id/age/:age",(req,res) => {
//     //http://localhost:3001/userId/234/age/23
//     // const id = req.params.id;
//     // const age = req.params.age;
//     const {id,age} = req.params;
//     res.send(`<h1>Student id is :${id}, Student age is :${age}</h1>`)
// });

//single header request 
// app.get("/",(req,res) => {
//    const id = req.header('id');
//    res.send(`<h1>Student id is : ${id}</h1>`);
// });

//multiple header request 
app.get("/",(req,res) => {
    const id = req.header('id');
    const name = req.header('name');
    res.send(`<h1>Student id is : ${id}, student name is :${name}</h1>`);
 });

module.exports = app;