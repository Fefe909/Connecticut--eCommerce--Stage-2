const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const multerApp = multer({dest: '/uploads'});
const contactoRouter = require('./routes/contacto');
const contacto = require('./models/contacto');
const productRouter = require('./routes/products');
const Product = require('./models/products');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/contacto', contactoRouter);
app.use('/productos', productRouter); 


app.get('/productos', async (req, res) => {
    try {
        const productos = await Product.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});
app.post('/productos', async (req, res) => {
    try {
        const { title, description, precio, imagenSrc, imagenAlt } = req.body;

        const newProduct = new Product({
            title,
            description,
            precio,
            imagen: {
                src: imagenSrc,
                alt: imagenAlt,
            },
        });

        const productoGuardado = await newProduct.save();
        res.json(productoGuardado);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar un producto' });
    }
});

async function run() {
    try {
        await mongoose.connect('mongodb+srv://fede:1234@connecticut.bgz7i0z.mongodb.net/Connecticut?retryWrites=true&w=majority');

        app.listen(5000, () => {
            console.log(`Servidor ejecutandose en http://localhost:5000`);
        });
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
    }
}
run()
.catch(err => console.error(err));
