const { Router } = require('express');
const Product = require("../models/products_models")

const router = Router();


router.get("/", async (req, res)=>{
    try {
        const productos = await Product.find();
        console.log(productos);
        res.send(productos)
        
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;
