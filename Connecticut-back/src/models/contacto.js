const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactoSchema = new Schema({
  name: String, 
  age: String,
  email: String,
  about: String,
  message: String
});

const contacto = mongoose.model('contacto', contactoSchema, 'contactForm');

module.exports = contacto;