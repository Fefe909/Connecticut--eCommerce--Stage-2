const express = require('express');
const mongoose = require('mongoose');
const contactoRouter = require('./routes/contacto');
const productsRouter = require('./routes/products');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/contacto', contactoRouter);
app.use('/productos', productsRouter);
app.use('/uploads', express.static('uploads'));

async function run() {
    try {
        await mongoose.connect(process.env.MONGO_STRING);
        app.listen(port, () => {
            console.log(`Servidor ejecutandose en http://localhost:${port}/`);
        });
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
    }
}
run().catch(err => console.error(err));