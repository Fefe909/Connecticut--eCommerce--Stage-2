const mongoose = require('mongoose');
const { Schema } = mongoose;

const productsSchema = new Schema({
  email: String,
  title: String, 
  description: String,
  price: String,
  imagen: String
});

const products = mongoose.model('products', productsSchema, 'products');

module.exports = products;