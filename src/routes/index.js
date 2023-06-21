const { Router } = require('express');
const productRoutes= require("./productRoutes")
const uploadProducts= require("../controllers/CloudinaryControl")
const userRoutes= require("./userRoutes")
const cartRoutesc = require('./cartHandlerRoutes')

const router = Router();

router.use("/products", productRoutes)
router.use("/upload", uploadProducts)
router.use("/users", userRoutes)
router.use("/cart", cartRoutesc)

module.exports = router;
