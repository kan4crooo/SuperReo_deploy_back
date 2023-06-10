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
   nickname:{
    type: String
   },
   isAdmin:{
    type: Boolean,
    default: false,
   },
   isActive: {
    type: Boolean,
    default: true
   },
   userid:{
    type: String
   },
   adresses: {
    type: Array,
    required: false
   },
   orders:{
    type:Array,
    required: false,
   }
});

const User= model("Users", userSchema) 

module.exports= User;