const express = require("express");
const mongoose = require('mongoose');

const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("hello");
});
app.post("/products",async(req,res)=>{
    try {
        //get data from request body
        // const title = req.body.title;
        // const price = req.body.price;
        // const description = req.body.description;

        // const newProduct = new Product({
        //     title:title,
        //     price:price,
        //     description:description,
        // });
        const productData =await Product.insertMany([
            {
                title:"iphone 12",
                price:12000,
                description:"this is beautiful Phone ",
            },
            {
                title:"iphone 1",
                price:10000,
                description:"this is beautiful Phone ",
            }
        ]);

        res.status(201).send(productData);
    } catch (error) {
        res.status(500).send({message:error.message});
    }
});

// create product schema
const productSchema =  new mongoose.Schema({
    title:
    {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

//create product model

const Product = mongoose.model("Products",productSchema);

//mongo db connected
const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ProductDB');
        console.log("db is connected");
    } catch (error) {
        console.log("DB is not connected");
        console.log(error);
        process.exit(1);
    }
};

//mongo db connected
// mongoose.connect('mongodb://127.0.0.1:27017/ProductDB')
// .then(()=>console.log("DB is connected"))
// .catch((error)=>{
//     console.log("DB is not connected");
//     console.log(error);
//     process.exit(1);
// });

app.listen(3000,async ()  =>{
    console.log(`server running successfully at http://localhost:3000`);
    await connectDB();
});




//DATABASE -> collection(table) -> document(rows)