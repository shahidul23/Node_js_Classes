const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const dbURL = process.env.DB_URL;

mongoose.connect(dbURL)
.then(()=>{
    console.log('mongodb atlas is connected');
})
.catch((error)=>{
    console.log(error);
    process.emit(1);
});


app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});