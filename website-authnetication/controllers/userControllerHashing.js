const User = require("../models/user");
const md5 = require("md5");

//database matching level - 1

const userRegistration = async (req, res)=>{
    try {
        const newUser = new User({
            email: req.body.email,
            password:md5(req.body.password),
        });
        await newUser.save();
        res.status(201).json({
            message:"user is created",
            data:newUser,
        });
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    }
    
}

const userLogin =async (req, res)=>{
    try {
        const email = req.body.email;
        const password = md5(req.body.password);
        const user = await User.findOne({email:email})
        if(user && user.password == password){
            res.status(200).json({
                status:'valid user'
            })
        }else{
            res.status(404).json({
                message:"user not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    }
}

module.exports = {userRegistration, userLogin};