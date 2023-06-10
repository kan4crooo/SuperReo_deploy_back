const { Router } = require('express');
const productRoutes= require("./productRoutes")
const uploadProducts= require("../controllers/CloudinaryControl")
const userRoutes= require("./userRoutes")

const router = Router();

router.use("/products", productRoutes)
router.use("/upload", uploadProducts)
router.use("/users", userRoutes)

module.exports = router;
