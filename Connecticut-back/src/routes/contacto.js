const {Router} = require('express');
const contactoRouter = Router();
const contactoController = require('../controllers/contacto');

contactoRouter.post('/', async (req, res) => {
    const {name, age, email, about, message} = req.body; //utilizamos body ya que el rout está definido como POST.
    const result = await contactoController.createMessage(name, age, email, about, message);
    res.send(result);
});

contactoRouter.get('/', async (req, res) => {
    try {
        const mensajes = await contactoController.getAllMessages();
        res.json(mensajes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener mensajes de contacto: ' + error.message });
    }
});

module.exports = contactoRouter;