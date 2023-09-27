const Contacto = require('../models/contacto');

const createMessage = async (name, age, email, about, message) => {
    try {
        const nuevoMensaje = new Contacto({
            name,
            age,
            email,
            about,
            message
        });

        const mensajeGuardado = await nuevoMensaje.save();
        return mensajeGuardado;
    } catch (error) {
        throw new Error('Error al crear un mensaje de contacto: ' + error.message);
    }
};

const getAllMessages = async () => {
    try {
        const mensajes = await Contacto.find();
        return mensajes;
    } catch (error) {
        throw new Error('Error al obtener mensajes de contacto: ' + error.message);
    }
};


module.exports = { createMessage, getAllMessages };