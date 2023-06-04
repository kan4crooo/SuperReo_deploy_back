const Products = require("./../models/products_models");

const deleteProduct = async (id) => {
  const product = await Products.deleteOne({ _id: id });
  if (product.deletedCount === 0) {
    throw `No product found with that ${id}`;
  }
};

module.exports = deleteProduct;
