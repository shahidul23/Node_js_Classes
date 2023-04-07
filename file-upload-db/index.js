const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const app = express()
const port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//connection to db

const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/TestDB");
        console.log("db is connected");
    } catch (error) {
        console.log("db is not connected");
        console.log(error);
        process.exit(1)
    }
}
 
//creating schema and model
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"user name is required"]
    },
    image:{
        type:String,
        required:[true,"user image is required"]
    },
});

const User = mongoose.model("Users",userSchema);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/");
    },
    filename: function (req, file, cb) {
      const name = Date.now() +"-"+file.originalname;
      cb(null, name);
    }
});
const upload = multer({ storage: storage })

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/user",(req,res)=>{
    res.status(200).sendFile(__dirname + "/index.html")
})
app.post("/user",upload.single("image"),async(req,res)=>{
    try {
        const newUser =new User({
            name:req.body.name,
            image:req.file.filename
        });
        await newUser.save();
        res.status(202).send(newUser);

    } catch (error) {
        res.status(500).send(error);
    }
});
app.listen(port, async() => {
    console.log(`Example app listening on port ${port}!`)
    await connectDB();
})