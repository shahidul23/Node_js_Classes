let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");
 
//get users
const getAllUser = (req,res) => {
    res.status(200).json(
        users
    );
};
//create users
const createUser = (req,res) => {
    const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
    };
    users.push(newUser);
    res.status(200).json(users);
};
//update users
const updateUser = (req, res) =>{
    const user_id = req.params.id;
    const {username, email} = req.body;
    users.filter((user) => user.id === user_id).map((selectedUser) => {
        selectedUser.username = username;
        selectedUser.email = email;
    });
    res.status(201).json(
        users
    );
};
//delete user
const deleteUser = (req, res) => {
    const user_id = req.params.id;
    users = users.filter((user)=> user.id !== user_id)
    res.status(203).json(
       users
    );
};

module.exports = {getAllUser,createUser,updateUser, deleteUser};