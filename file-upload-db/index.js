const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const app = express()
const port = 3000

//connection to db
const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://shahidul232:shahidul232@cluster0.9f2dfm8.mongodb.net/TestDB");
        console.log("db is connected");
    } catch (error) {
        console.log("db is not connected");
        console.log(error);
        process.exit(1)
    }
}
 

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, async() => {
    console.log(`Example app listening on port ${port}!`)
    await connectDB();
})