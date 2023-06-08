const multer = require('multer');
const createProduct = require('./createProduct');
const { Router } = require('express');
const uploadProducts= Router();

// Configuración de multer para almacenar los archivos en el directorio "uploads"
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Generar un nombre único para el archivo
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

// Middleware de multer para manejar la carga de archivos
const upload = multer({ storage: storage });

// Ruta para crear un producto
uploadProducts.post("/", upload.single('image'), async(req, res) => {
  try {
    const { name, category, price, brand, stock } = req.body;
    const imagePath = req.file.path; // Obtener la ruta del archivo subido
console.log(imagePath)
    const newObject={
        name: name,
        category: category,
        price: price,
        brand: brand,
        stock: stock,
        image: imagePath
    }

    const newProduct= await createProduct(newObject);

    res.status(201).send(newProduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports= uploadProducts;