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
        const title = req.body.title;
        const price = req.body.price;
        const rating = req.body.rating;
        const description = req.body.description;
        const phone = req.body.phone;
        const email = req.body.email;

        const newProduct = new Product({
            title:title,
            price:price,
            rating:rating,
            description:description,
            phone:phone,
            email:email,
        });
        const productData = await newProduct.save();
        // const productData =await Product.insertMany([
        //     {
        //         title:"iphone 12",
        //         price:12000,
        //         description:"this is beautiful Phone ",
        //     },
        //     {
        //         title:"iphone 1",
        //         price:10000,
        //         description:"this is beautiful Phone ",
        //     }
        // ]);

        res.status(201).send(productData);
    } catch (error) {
        res.status(500).send({message:error.message});
    }
});

//get data form databases
// app.get("/products", async(req,res)=>{
//     try {
//        const products = await Product.find();
//        if(products){
//         res.status(200).send({
//             success : true,
//             message : "find all Products",
//             data : products
//         });
//        }else{
//         res.status(404).send({
//             success:false,
//             message:"Products no found",
//         });
//        }
//     } catch (error) {
//         res.status(500).send({message:error.message});
//     }
// });

// use les then & greater then operator
/*
//https://www.mongodb.com/docs/manual/reference/operator/query-comparison/
-->$lt == less then operator
-->gt == greater then operator
*/
// using in less then Operator 
/*
app.get("/products", async(req,res)=>{
    try {
       const products = await Product.find({price: {$lt:100000}});
       if(products){
        res.status(200).send({
            success : true,
            message : "find all Products",
            data : products
        });
       }else{
        res.status(404).send({
            success:false,
            message:"Products no found",
        });
       }
    } catch (error) {
        res.status(500).send({message:error.message});
    }
});
*/

//using in grater then operator
/*
app.get("/products", async(req,res)=>{
    try {
       const products = await Product.find({price: {$gt:100000}});
       if(products){
        res.status(200).send({
            success : true,
            message : "find all Products",
            data : products
        });
       }else{
        res.status(404).send({
            success:false,
            message:"Products no found",
        });
       }
    } catch (error) {
        res.status(500).send({message:error.message});
    }
});
*/
// equales equal operator
/*
app.get("/products",async(req,res)=>{
   try {
    const products = await Product.find({price:{$eq:120000}});
    if (products) {
        res.status(200).send({
            success:true,
            message:"return all products",
            data:products,
        });
    }else{
        res.status(404).send({
            success:false,
            message:"products not found",
        });
    }
   } catch (error) {
    res.status(500).send({message:error.message});
   }
});
*/
//not equales operator
/*
app.get("/products",async(req,res)=>{
   try {
    const products = await Product.find({price:{$ne:200000}});
    if (products) {
        res.status(200).send({
            success:true,
            message:"all product found",
            data:products,
        });
    }else{
        res.status(404).send({
            success:false,
            message:"product not found",
        });
    }
   } catch (error) {
    res.status(500).send({message:error.message});
   }
});
*/

//greater then equales operator
/*
app.get("/products",async(req,res)=>{
    try {
        const products = await Product.find({price:{$gte:120000}});
        if (products) {
            res.status(200).send({
                success: true,
                message:"all products found",
                data:products,
            });
        } else {
            res.status(404).send({
                success:false,
                message:"products not found",
            });
        }
    } catch (error) {
        res.status(500).send({message:error.message});
    }
});
*/
//$in-->Matches any of the values specified in an array.
/*
app.get("/products",async(req,res)=>{
    try {
        const products = await Product.find({price:{$in:[1000,12000,20000,30000,5000]}});
        if (products) {
            res.status(200).send({
                success: true,
                message:"all products found",
                data:products,
            });
        } else {
            res.status(404).send({
                success:false,
                message:"products not found",
            });
        }
    } catch (error) {
        res.status(500).send({message:error.message});
    }
});
*/
//$nin -->Matches none of the values specified in an array.
/*
app.get("/products",async(req,res)=>{
    try {
        const products = await Product.find({price:{$nin:[1000,12000,20000,30000,5000]}});
        if (products) {
            res.status(200).send({
                success: true,
                message:"all products found",
                data:products,
            });
        } else {
            res.status(404).send({
                success:false,
                message:"products not found",
            });
        }
    } catch (error) {
        res.status(500).send({message:error.message});
    }
});
*/

//user define value
/*
app.get("/products",async(req,res)=>{
    try {
        const price = req.query.price;
        let products;
        if (price) {
            products = await Product.find({price:{$gt:price}});
        } else {
            products = await Product.find();
        }
        if (products) {
            res.status(200).send({
                success:true,
                message:"return all products",
                data:products,
            });
        } else {
            res.status(404).send({
                success:false,
                message:"product not found",
            });
        }
    } catch (error) {
        res.status(500).send({message:error.message});
    }
});
*/

//logical query Operator
//https://www.mongodb.com/docs/manual/reference/operator/query-logical/
//multipule condition use static value
/*
app.get("/products",async(req,res)=>{
    try {
        const products = await Product.find({$and:[{price:{$gt:90000}}, {rating:{$gte:4}}, {title:{$eq:"iphone 14"}}]});
        if (products) {
            res.status(200).send({
                success:true,
                message:"return all products",
                data:products,
            });
        } else {
            res.status(200).send({
                success:false,
                message:"products not found",
            });
        }
    } catch (error) {
        res.status(500).send({
            message:error.message,
        });
    }
});
*/
//multipule condition use dinamic  value
/*
app.get("/products",async(req,res)=>{
    try {
        const price = req.query.price;
        const rating = req.query.rating;
        let products ;
        if (price && rating) {
            products = await Product.find({
                $and:[
                    {price:{$gt:price}}, 
                    {rating:{$gt:rating}},
                ]
            });
        } else {
            products = await Product.find();
        }
        if (products) {
            res.status(200).send({
                success:true,
                message:"return all products",
                data:products,
            });
        } else {
            res.status(200).send({
                success:false,
                message:"products not found",
            });
        }
    } catch (error) {
        res.status(500).send({
            message:error.message,
        });
    }
});
*/
//count documents
/*
app.get("/products",async(req,res)=>{
    try {
        const price = req.query.price;
        const rating = req.query.rating;
        let products ;
        if (price && rating) {
            products = await Product.find({
                $and:[
                    {price:{$gt:price}}, 
                    {rating:{$gt:rating}},
                ]
            }).countDocuments();
        } else {
            products = await Product.find().countDocuments();
        }
        if (products) {
            res.status(200).send({
                success:true,
                message:"return all products",
                data:products,
            });
        } else {
            res.status(200).send({
                success:false,
                message:"products not found",
            });
        }
    } catch (error) {
        res.status(500).send({
            message:error.message,
        });
    }
});
*/
//shorting in find documents
/*
app.get("/products",async(req,res)=>{
    try {
        const price = req.query.price;
        const rating = req.query.rating;
        let products ;
        if (price && rating) {
            products = await Product.find({
                $and:[
                    {price:{$gt:price}}, 
                    {rating:{$gt:rating}},
                ]
            }).sort({price: 1});
        } else {
            products = await Product.find().sort({price: 1});
        }
        if (products) {
            res.status(200).send({
                success:true,
                message:"return all products",
                data:products,
            });
        } else {
            res.status(200).send({
                success:false,
                message:"products not found",
            });
        }
    } catch (error) {
        res.status(500).send({
            message:error.message,
        });
    }
});

app.get("/products",async(req,res)=>{
    try {
        const price = req.query.price;
        const rating = req.query.rating;
        let products ;
        if (price && rating) {
            products = await Product.find({
                $and:[
                    {price:{$gt:price}}, 
                    {rating:{$gt:rating}},
                ]
            }).sort({price: -1});
        } else {
            products = await Product.find().sort({price: -1});
        }
        if (products) {
            res.status(200).send({
                success:true,
                message:"return all products",
                data:products,
            });
        } else {
            res.status(200).send({
                success:false,
                message:"products not found",
            });
        }
    } catch (error) {
        res.status(500).send({
            message:error.message,
        });
    }
});
*/
//shorting and selecting 
/*
app.get("/products",async(req,res)=>{
    try {
        const price = req.query.price;
        const rating = req.query.rating;
        let products ;
        if (price && rating) {
            products = await Product.find({
                $and:[
                    {price:{$gt:price}}, 
                    {rating:{$gt:rating}},
                ]
            }).sort({price: -1}).select({title: 1,price:1,_id:0});
        } else {
            products = await Product.find().sort({price: -1}).select({title: 1,price:1,_id:0});
        }
        if (products) {
            res.status(200).send({
                success:true,
                message:"return all products",
                data:products,
            });
        } else {
            res.status(200).send({
                success:false,
                message:"products not found",
            });
        }
    } catch (error) {
        res.status(500).send({
            message:error.message,
        });
    }
});
*/

//============================================= *** ============================
//                                       Delete documents
                           //-----------------------------------------
/*                           
app.delete("/products/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const productStatus = await Product.findByIdAndDelete({_id:id});
        if (productStatus) {
            res.status(200).send({
                success:true,
                message:"deleted single product",
                data:productStatus,
            });
        } else {
            res.status(404).send({
                success:false,
                message:"product not found",
            });
        }
    } catch (error) {
        res.status(500).send({message:error.message});
    }
});
*/
//============================================= *** ============================
//                                       Update documents
                           //-----------------------------------------
//update documents
/*
app.put("/products/:id", async(req,res)=>{
    try {
        const id = req.params.id;
        const {title,desc,rating,price} = req.body;
        const productUpdate = await Product.findByIdAndUpdate({_id:id},{
            $set: {
                title: title,
                description: desc,
                rating: rating,
                price: price,
            } 
        },{
            new:true
        }
        );
        if (productUpdate) {
            res.status(200).send({
                success:true,
                message: "Updated single value",
                data:productUpdate
            });
        } else {
            res.status(404).send({
                success:false,
                message:"product not found"
            });
        }
    } catch (error) {
        res.status(500).send({message:error.message});
    }
});
*/




/*
app.get("/products/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        //use select function

        // const product = await Product.findOne({_id: id}).select({
        //     title:1,
        //     price:1,
        //     _id:0,
        // });

        //use after find function

        // const product = await Product.findOne({_id:id},{title:1,_id:0});
        const product = await Product.findOne({_id:id});
        if (product) {
            res.status(200).send({
                success : true,
                message : "return single number",
                data : product
            });
        }else{
            res.status(404).send({
                success : false,
                message:"Product no found",
            });
        }        
    } catch (error) {
        res.status(500).send({message:error.message});
    }
});
*/

//https://mongoosejs.com/docs/validation.html
// create product schema
const productSchema =  new mongoose.Schema({
    title:
    {
        type:String,
        required:[
            true,
            "product title is required"
        ],
        minlength:[3, " minimum length of the title shot be 3"],
        maxlength:[100, "maximum length of title shot be 10"],
        lowercase:true,
        trim: true,
        // enum:{
        //     values:["iphone","samsung"],
        //     message:"{VALUE} is not supported",
        // }
    },
    price:{
        type:Number,
        required:true,
        min:[200, "minimum price short be 200"],
        max:[2000, "maximum price short be 2000"],
    },
    email:{
        type:String,
        validate: {
            validator : function(v){
                return /^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message:(props) =>`${props.value} is not a valid email address`
        }
    },
    phone:{
        type:String,
        required:[true, "phone number is required"],
        validate:{
            validator : function(v){
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message:(props) =>`${props.value} is not a valid phone number`
        }
    },
    rating:{
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