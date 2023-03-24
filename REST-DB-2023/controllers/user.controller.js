const {v4: uuidv4 } = require('uuid');
const User = require("../models/user.model");


const getAllUsers =async (req,res)=>{
    try {
        const users = await User.find();
        if (users) {
            res.status(200).send({
                success:true,
                message:"all user founded",
                data:users
            });
        } else {
            res.status(404).send({
                success:false,
                message:"user not found"
            });
        }
        
    } catch (error) {
        res.status(500).send({message:error.message});
    }
};

const getOneUser =async (req,res)=>{
    try {
        const user = await User.findOne({id:req.params.id});
        if (user) {
            res.status(200).send({
                success:true,
                message:"One user founded",
                data:user
            });
        } else {
            res.status(404).send({
                success:false,
                message:"user not found"
            });
        }
    } catch (error) {
        res.status(500).send({message:error.message});
    }
};

const createUser = async(req,res)=>{
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age:Number(req.body.age),
        });
       const user =  await newUser.save();  
        res.status(200).send({
            success: true,
            message:"user create successfully",
            data:user,
        });
    } catch (error) {
        res.status(500).send({
            message:error.message,
        });
    }
};

const updateUser =async (req,res)=>{
    try {
        const user = await User.findOne({id:req.params.id});
        user.name = req.body.name;
        user.age = Number(req.body.age);
        await user.save();
        res.status(200).send({
            success:true,
            message:"user updated successfully",
            data:user
        });
    } catch (error) {
        res.status(500).send({message:error.message});
    }
};

const deleteUser = async (req,res)=>{
    try {
        await User.deleteOne({id:req.params.id});
        res.status(200).send({
            success:true,
            message:"user is deleted"
        });
    } catch (error) {
        res.status(500).send({message:error.message});
    }
};

module.exports = {getAllUsers,getOneUser,createUser,updateUser,deleteUser};