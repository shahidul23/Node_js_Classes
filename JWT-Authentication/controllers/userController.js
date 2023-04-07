const User = require("../server/models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const saltRounds = 10;
const SECRET_KEY = process.env.SECRET_KEY;

const userRegister = async (req, res)=>{
    try {
        const user = await User.findOne({username:req.body.username});
        if(user) return res.status(400).send("user already exists");
        bcrypt.hash(req.body.password, saltRounds, async(err, hash)=>{
            const newUser = new User({
                username:req.body.username,
                password:hash,
            });
            await newUser.save().then((user)=>{
                res.status(200).send({
                    success: true,
                    message: "user is created successfylly",
                    user:{
                       id: user._id,
                       username:user.username,
                    }
                });
            })
            .catch((error)=>{
                res.status(404).send({
                    success:false,
                    message:error.message,
                });
            });
        });
    } catch (error) {
        res.status(500).send({

            message:error.message,
        });
    }
}

const userLogin = async (req, res)=>{
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user) return res.status(401).send({
            success:false,
            message:"user is not found",
        });
        if(!bcrypt.compareSync(req.body.password, user.password))
            return res.status(401).send({
                success:false,
                message: "Incorrect password",
            });
        
        const payload = { 
            id: user._id,
            username:user.username,
         }
        const token = jwt.sign(payload, SECRET_KEY,{expiresIn:"2d"});
        return res.status(200).send({
            success:true,
            message:"user is logged in successfully",
            token:"Bearer "+token,
        });
    } catch (error) {
        res.status(500).send({
            message:error.message,
        })
    }
}

const userProfile = (req, res)=>{
    return res.status(200).send({
        success:true,
        user:{
            id:req.user._id,
            username:req.user.username,
        }
    });
}

module.exports = {userRegister, userLogin, userProfile};