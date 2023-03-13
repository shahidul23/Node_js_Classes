const app = require('./Route/app');
const port = 3001;


app.get("/register",(req,res) =>{
    res.sendFile(__dirname + "/views/register.html");
});

app.post("/register",(req,res) =>{
    // const fullName = req.body.fullName;
    // const age = req.body.age;
    const {fullName,age} = req.body;
    res.send(`my name is : ${fullName},my age is :${age}`);
});

app.listen(port,() => {
    console.log(`server running successfully at http://localhost:${port}`);
});