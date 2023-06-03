const { Schema, model }= require("mongoose");

const productosSchema= new Schema(
    {
        name:{
            type: String,
        },
        price:{
            type: Number,
        }
        
});

const Product= model("productos", productosSchema) 

module.exports= Product;