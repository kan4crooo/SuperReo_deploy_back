const { Schema, model }= require("mongoose");

const productosSchema= new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        image:{
            type:String,
            required: true,
        },
        brand:{
            type:String
        },
        category:{
            type:Array,
            required: true,
        },
        stock:{
            type:Number,
            required: true,
        },
        isActive:{
            type:Boolean,
            default: true,
        }
});

const Product= model("productos", productosSchema) 

module.exports= Product;