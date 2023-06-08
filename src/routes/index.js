const { Router } = require('express');
const productRoutes= require("./productRoutes")
const uploadProducts= require("../controllers/CloudinaryControl")
const router = Router();
router.use("/products", productRoutes)
router.use("/upload", uploadProducts)

module.exports = router;
