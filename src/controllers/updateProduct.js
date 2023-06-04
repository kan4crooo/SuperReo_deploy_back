const Products = require("../models/products_models")

const updateProducts= async(id, data)=>{
    const product= await Products.findOne({_id: id});
    if(!product) throw `No product found with that ${id}`;
    product.name= data.name;
    product.price= data.price;
    product.image= data.image;
    product.brand= data.brand;
    product.category= data.category;
    return await product.save().catch(e=>console.log(e))
}

module.exports= updateProducts