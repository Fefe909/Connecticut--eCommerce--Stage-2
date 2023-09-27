const Products = require('../models/products');

const getAllProducts = async (req, res) => {
  try {
    const productos = await Products.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos: ' + error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const { title, description, precio } = req.body;
    const imagenSrc = req.file.filename;
    const imagenAlt = '';

    const newProduct = await create(title, description, precio, imagenSrc, imagenAlt);

    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar un producto: ' + error.message });
  }
};

module.exports = { getAllProducts, addProduct };