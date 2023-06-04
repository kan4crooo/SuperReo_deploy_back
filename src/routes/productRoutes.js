const { Router }= require("express");
const {allProducts, findById, findProduct}= require("../controllers/getProducts.js")
const productRoutes= Router();

productRoutes.get("/", async(req, res)=>{
    const {name}= req.query;
    try {
        if(name){
            res.status(201).send(await findProduct(name))
        }
        else return res.status(201).send(await allProducts())
    } catch (error) {
        res.status(404).send({error})
    }
})

productRoutes.get("/:id", async(req, res)=>{
    const {id}= req.params;
    try {
        return res.status(201).send(await findById(id))
    } catch (error) {
        res.status(404).send({error})
    }
})


module.exports= productRoutes