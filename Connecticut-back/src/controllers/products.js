const Products = require('../models/products');
const fs = require('fs');

const getAllProducts = async (req, res) => {
  try {
    let productos = await Products.find();
    productos = productos.map(producto => ({
      ...producto._doc,
      imagen: "http://localhost:5000/uploads/" + producto.imagen,
    }));
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos: ' + error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const { email, title, description, price } = req.body;
    const imagen = req.file.originalname;

    fs.copyFileSync(req.file.path, './uploads/' + imagen);
    
    const newProduct = new Products({
      email,
      title,
      description,
      price,
      imagen
    });

    await newProduct.save();

    newProduct.imagen = "http://localhost:5000/uploads/" + newProduct.imagen;

    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar un producto: ' + error.message });
  }
};

module.exports = { getAllProducts, addProduct };