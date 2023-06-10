const Products = require("../models/products_models");

const updateProductIsActive = async (id, isActive) => {
  const product = await Products.findByIdAndUpdate(id, { isActive }, { new: true });
  if (!product) throw new Error(`No product found with that ID: ${id}`);
  return product;
};

module.exports = updateProductIsActive;
