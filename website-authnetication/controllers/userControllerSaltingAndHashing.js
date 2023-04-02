const User = require("../models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;

//http://password-checker.online-domain-tools.com/


//database matching level - 1

const userRegistration = async (req, res)=>{
    try {
        
        bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
            const newUser = new User({
                email:req.body.email,
                password:hash,
            });
            await newUser.save();
            res.status(201).json({
                message:"user is created",
                data:newUser,
            });
        });
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    }
    
}

const userLogin =async (req, res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email:email})
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(result === true){
                    res.status(200).json({
                        status:'valid user'
                    });
                }
            });
            
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