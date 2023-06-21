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
    if (product === null) {
        throw Error(`There is not products with this ${id}`)
    }
    return product;
}

const findByCategory = async (category) => {
    const regExpCategory = new RegExp(category, "i");
    const prodByCategory = await Products.find({ category: { $in: [regExpCategory] } });
    if (!prodByCategory.length) {
      throw new Error(`No hay productos con la categoría '${category}'.`);
    }
    return prodByCategory;
  };
  
module.exports={
    findById,
    findProduct,
    allProducts,
    findByCategory
}