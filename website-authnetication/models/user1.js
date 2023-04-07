const mongoose = require("mongoose");
const encrypt = require('mongoose-encryption');
require("dotenv").config();

/*
// normal schema 
const userSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    },
    createdOn:{
        type:Date,
        default:Date.now
    }
});
*/

//encryption schema
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    },
    createdOn:{
        type:Date,
        default:Date.now
    }
});
const ecnKey = process.env.ENC_KEY;
// encrypt age regardless of any other options. name and _id will be left unencrypted

userSchema.plugin(encrypt, { 
    secret: ecnKey, 
    encryptedFields: ['password'],
 });

module.exports = mongoose.model("user",userSchema);