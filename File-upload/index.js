const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

//file upload code
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/");
    },
    filename: function (req, file, cb) {
      const name = Date.now() +"-"+file.originalname;
      cb(null, name);
    }
})
const upload = multer({ storage: storage })

//post message
app.post("/register",upload.single("image"),(req,res)=>{
    res.status(200).send("file is uploaded");
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get("/register",(req,res)=>{
    res.status(200).sendFile(__dirname+"/views/index.html")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});