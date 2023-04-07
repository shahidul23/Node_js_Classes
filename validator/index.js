const { body, validationResult } = require("express-validator");
const express = require("express");
const userRoutes = require("./routes/user");
const app = express();
const port = 3001


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",userRoutes)

app.get("/",(req,res)=>{
    res.status(200).send("hello");
});

//name email password dob
// app.post("/api/register",


// // input validation 
// body("name")
// .trim()
// .notEmpty()
// .withMessage("name is missing")
// .isLength({min:5})
// .withMessage("mane must minimmun 5 charter"),
// body("email")
// .trim()
// .notEmpty().withMessage("Email is empty")
// .isEmail().withMessage("is not a valid email"),
// body("password")
// .trim()
// .notEmpty().withMessage("password is empty")
// .isLength({min:8}).withMessage("password must be 8 charter"),
// body("dob")
// .trim()
// .notEmpty().withMessage("dob is empty")
// .isISO8601().toDate().withMessage("not a valid dob")

// ,(req, res, next)=>{
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors: errors.array()});
//     }
//     next();
// }

// ,(req,res)=>{
//     try {
//         const {name, email, password, dob} = req.body;
//         const newUser = {
//             name, email, password, dob
//         }
//         return res.status(202).json({
//             message:"user created",
//             data:newUser
//         });
//     } catch (error) {
//         return res.status(500).json({
//             message:error.message,
//         });
//     }
// })

//user login

// app.post("/api/login",


// // input validation 
// body("email")
// .trim()
// .notEmpty().withMessage("Email is empty")
// .isEmail().withMessage("is not a valid email"),
// body("password")
// .trim()
// .notEmpty().withMessage("password is empty")
// .isLength({min:8}).withMessage("password must be 8 charter"),
// (req, res, next)=>{
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors: errors.array()});
//     }
//     next();
// }
// ,(req,res)=>{
//     try {
//         const { email, password} = req.body;
//         if (email ==="shahidul@gmail.com" && password === "12345678") {
//             return res.status(202).json({
//                 message:"user was logged In",
//             });
//         }else{
//             return res.status(400).json({
//                 message:"password and email not match",
//             });
//         }
        
//     } catch (error) {
//         return res.status(500).json({
//             message:error.message,
//         });
//     }
// })
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})