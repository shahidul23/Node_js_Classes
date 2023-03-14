const express = require("express");
const app = express();
const port = 3011;

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html");
})
app.use(express.static("public"));
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
});