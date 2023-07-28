import React, { useState } from "react";
import {MainLayout} from "../layout/MainLayout";
import { validateEmail, validateTitle, validatePrice, validateDescription } from "../services/formValidation";
import '../assets/scss/main.scss';
import TextBox from "../components/TextBox/TextBox";
import TextArea from "../components/TextArea/TextArea";
import FormButton from '../components/FormButton/FormButton';

const AltaContent = () => {
    const [data, setData] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, ...{ [name]: value} });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ((
            !validateEmail(data.email) ||
            !validateTitle(data.title) ||
            !validatePrice(data.price) ||
            !validateDescription(data.description)
          )
        ) ? 
        (
            alert("Por favor, verifique los campos del formulario.")
        ) : (
            alert("Los datos se enviaron correctamente :).")
        );
    };

    return (
        <div className="product-form">
            <h1 className="form__logo">Connecticut</h1>
            <form className="productForm" id="productForm" encType="multipart/form-data" onSubmit={handleSubmit}>
                <TextBox label='Email del empleado:' name='email' type='email' onChange={handleChange} required={true} value={data.email} />
                <TextBox label='Título del producto:' type='text' onChange={handleChange} required={true} name="title" value={data.title}/>
                <TextBox label='Precio:' type='text' onChange={handleChange} required={true} name="price" value={data.price}/>
                <TextBox label='Adjuntar imágenes:' type='file' accept="image/*" onChange={handleChange} required={true} multiple={true} name="image"/>
                <TextArea label='Descripción:' rows={3} onChange={handleChange} required={true} value={data.description} name="description"/>
                <FormButton data={data} />
            </form>
        </div>
    );
};

const Alta = () => {
    const altaTitle = "Agrega un producto a nuestro site :)";
    const altaDescription = "Llena el formulario y dale click en 'Enviar'";
    return (
        <>
            <MainLayout pageTitle={altaTitle} pageDescription={altaDescription}>
                <AltaContent/>
            </MainLayout>
        </>
    );
};
export default Alta;