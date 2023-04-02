const User = require("../models/user");


//database matching level - 1

const userRegistration = async (req, res)=>{
    try {
        const newUser = new User(req.body);
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
        const { email, password } = req.body;
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