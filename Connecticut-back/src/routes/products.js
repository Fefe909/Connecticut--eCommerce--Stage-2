const {Router} = require('express');
const productsRouter = Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // al controller
const productsController = require('../controllers/products');

// Ruta para obtener todos los productos (GET)
productsRouter.get('/', productsController.getAllProducts);

// Ruta para agregar un nuevo producto (POST)
productsRouter.post('/', upload.single('image'), productsController.addProduct);

module.exports = productsRouter;