const express = require("express")
const chalk = require("chalk")
const app = express();
const post = 3002



app.get("/",(req,res)=>{
    res.status(200).send("hello chalk")
})
app.get("/user",(req,res)=>{
    res.status(202).send("all user list")
})

app.listen(post,()=>{
    console.log(chalk.red(`server is running at http://localhost:${post}`));
})