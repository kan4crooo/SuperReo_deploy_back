const { Router } = require('express');
const productRoutes= require("./productRoutes")

const router = Router();
router.use("/products", productRoutes)
//comiteaaaaaaaa
module.exports = router;
