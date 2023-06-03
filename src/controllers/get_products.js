const Product = require("../models/products_models");


const getProducts = async ()=>{
    const products = await Product.find();
    return products;
};


module.exports = {
    getProducts,
}