require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;


app.get("/",(req,res)=>{
    res.send("Hello I am home route");
})

app.listen(port,()=>{
    console.log(`server is running successfully at http://localhost:${port}`);
});
