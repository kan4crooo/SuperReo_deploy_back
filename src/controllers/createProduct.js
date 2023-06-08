const Products= require("./../models/products_models")

const createProduct = async data=>{
console.log(data)
    if(!data.name) throw `attribute name is required`;
    if(!data.price) throw `attribute price is required`;
    if(!data.image) throw `attribute image is required`;
    if(!data.category) throw `attribute category is required`;
    if(!data.stock) throw `attribute stock is required`;
    const productDb= new Products(data);
    const savedProduct= await productDb.save();
    return savedProduct;
}

module.exports= createProduct