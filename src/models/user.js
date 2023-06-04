const { Schema, model }= require("mongoose");

const userSchema= new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number
    },
    password:{
        type: String,
        required: true
    },
    dni:{
        type: Number
    } 
});

const User= model("user", userSchema) 

module.exports= User;