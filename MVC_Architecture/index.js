const express = require("express");
const app = express();
const port = 3333;


app.get("/",(req,res)=>{
    res.send("I am home page");
})
app.get("/user",(req,res)=>{
    res.send("hello users");
})
app.use((req,res,next)=>{
   res.status(404).json({
    message: "404 page not found",
   });
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})