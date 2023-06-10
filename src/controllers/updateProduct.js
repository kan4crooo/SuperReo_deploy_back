const Products = require("../models/products_models")

const updateProducts = async (id, data) => {
    const product = await Products.findOne({ _id: id });
    if (!product) throw `No product found with that ${id}`;
    product.name = data.name;
    product.price = data.price;
    product.image = data.image;
    product.brand = data.brand;
    product.category = data.category;
    product.stock = data.stock;
    product.isActive = data.isActive;
    return await product.save(); // Devuelve el producto guardado
  };
  

module.exports= updateProducts