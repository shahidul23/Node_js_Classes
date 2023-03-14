const express = require("express");
const app = express();
const port = 3002;

//error handling middleware 
app.use((req,res,next)=>{
   res.send("404 page not found");
}); 
//other error handling middleware 

app.use((err,req,res,next)=>{
    res.status(500).send('Something broke!')
})

const myMiddleware = (req,res,next) =>{
    console.log("middle ware function");
    req.currentTime = new Date(Date.now());
    next();
}

//all route method use the middleware
app.use(myMiddleware);

app.get("/",myMiddleware,(req,res)=>{
    console.log("i am home, new time is :"+req.currentTime);
    res.send("i am home route");
});
app.get("/about",(req,res)=>{
    console.log("i am about, new time is :"+req.currentTime);
    res.send("i am about route");
});

app.listen(port,()=>{
    console.log(`server running successfully at http://localhost:${port}`);
});