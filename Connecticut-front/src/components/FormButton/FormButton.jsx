import React from "react";
import './FormButton.scss';

const FormButton = ({ data }) => {
    
    return (
        <button type="submit" className="form__send"
        onClick={(e) => console.log(data)}>
            Enviar
        </button>
    );
};
export default FormButton;