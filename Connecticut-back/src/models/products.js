const mongoose = require('mongoose');
const { Schema } = mongoose;

const productsSchema = new Schema({
  title: String, 
  description: String,
  price: Number,
  imagen: {
    src: String,
    alt: String
  }
});

const products = mongoose.model('products', productsSchema, 'products');

module.exports = products;