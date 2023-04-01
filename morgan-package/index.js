const express = require("express")
const morgan = require('morgan')
const app = express();
const port = 3003

app.use(morgan("dev"))
app.use(morgan('combined'))


app.get("/user",(req,res)=>{
    res.status(200).send("product list")
});

app.get("/",(req,res)=>{
    res.status(200).send("hello world");
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});