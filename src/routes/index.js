const { Router } = require('express');
const { getProducts } = require('../controllers/get_products');


const router = Router();


router.get("/", async (req, res)=>{
    try {
        const productos = await  getProducts();
        return res.status(200).send(productos)
        
    } catch (error) {
        return res.status(400).send(error)
    }
})


module.exports = router;
