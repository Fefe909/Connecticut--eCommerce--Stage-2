import React, { useState} from "react";
import MainLayout from "../layout/MainLayout";
import { validateProductListing, validateEmail, validateTitle, validatePrice, validateDescription } from "../services/formValidation";
import '../assets/scss/main.scss';

const AltaContent = () => {
    
    return (
        <div className="product-form">
            <h1 className="form__logo">Connecticut</h1>
            <form className="productForm" id="productForm" encType="multipart/form-data" onSubmit={validateProductListing}>
                <label className="labelForm" htmlFor="emailEmployee">Email del empleado:<span className="required">*obligatorio</span></label>
                <input className="inputData" type="email" id="emailEmployee" name="emailEmployee" required />
                <label className="labelForm" htmlFor="productTitle">Título del producto:<span className="required">*obligatorio</span></label>
                <input className="inputData" type="text" id="productTitle" name="productTitle" required />
                <label className="labelForm" htmlFor="currentPrice">Precio:<span className="required">*obligatorio</span></label>
                <input className="inputData" type="text" id="currentPrice" name="currentPrice" required />
                <label className="labelForm" htmlFor="formerPrice">Precio anterior:</label>
                <input className="inputData" type="text" id="formerPrice" name="formerPrice" />
                <label className="labelForm" htmlFor="uploadImg">Adjuntar imágenes:<span className="required">*obligatorio</span></label>
                <input className="inputData" type="file" id="uploadImg" accept="image/*" multiple required />
                <label className="labelForm" htmlFor="description">Descripción:<span className=" required">*obligatorio</span></label>
                <textarea className="textareaData" name="description" id="description" required />
                <input type="submit" className="product-form__send" value="Enviar" />
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