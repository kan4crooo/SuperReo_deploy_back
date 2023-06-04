const Products = require("../models/products_models");

const allProducts= async()=>{
    return await Products.find()
}

const findProduct= async(name)=>{
    const regExpName= new RegExp(name, 'i');
    const prodByName= await Products.find({name: regExpName});
    if(!prodByName.length) throw `There is not products with this ${name}`;
    else return prodByName;
}

const findById= async(id)=>{
    const product= await Products.findOne({_id:id}).catch(e=>{throw`There is not products with this ${id}`});
    return product;
}

module.exports={
    findById,
    findProduct,
    allProducts
}