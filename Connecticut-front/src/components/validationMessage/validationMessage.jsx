import React from "react";
import './validationMessage.scss';

const validationMessage = ({ isValid, name, email }) => {
    return (

        <div className='validationMessage'>
            <p>Bienvenido {name}, gracias por usar este sitio 😊😊.</p>
            <p>{text}</p>
            <button href="../../public/index.html">Volver</button>
        </div>
    );
};