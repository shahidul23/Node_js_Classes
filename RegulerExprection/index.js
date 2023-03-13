const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("hello");
});
//regular expression
app.get("/product/:id([0-9]+)",(req,res)=>{
    const id = req.params.id;
    res.send(`your id is :${id}`);
});

app.get("/product/:title([a-zA-Z0-9]+)",(req,res)=>{
    const title = req.params.title;
    res.send(`your Title is :${title}`);
});

app.use("*",(req,res)=>{
    res.status(404).send({
        message:"404 !!! Page Not found",
    });
});

app.listen(port,()=>{
    console.log(`Server is running successfully at http://localhost:${port}`);
});