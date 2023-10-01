const { Router } = require('express');
const productsRouter = Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const productsController = require('../controllers/products');

productsRouter.get('/', productsController.getAllProducts);
productsRouter.post('/', upload.single('imagen'), productsController.addProduct);

module.exports = productsRouter;