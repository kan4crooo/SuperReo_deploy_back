const { Schema, model }= require("mongoose");

const userSchema= new Schema({
    picture:{
        type: String,
    },    
    name:{
        type: String,
        required: true
    },    
    surname:{
        type: String,
    },
    email:{
        type: String,
        required: true
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
   },
   verified:{
    type: Boolean
   },
   car:{
    type:Array
   }
});

const User= model("users", userSchema)

module.exports= User;