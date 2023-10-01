import React, { useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { validateEmail, validateTitle, validatePrice, validateDescription } from "../services/formValidation";
import '../assets/scss/main.scss';
import TextBox from "../components/TextBox/TextBox";
import TextArea from "../components/TextArea/TextArea";
import FormButton from '../components/FormButton/FormButton';

const AltaContent = () => {
    const [data, setData] = useState({
        email: "",
        title: "",
        price: "",
        description: "",
        imagen: null
    });
    
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setData({ ...data, [name]: type === "file" ? files[0] : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !validateEmail(data.email) ||
            !validateTitle(data.title) ||
            !validatePrice(data.price) ||
            !validateDescription(data.description) ||
            !data.imagen
        ) {
            alert("Por favor, verifique los campos del formulario.");
            return;
        }

        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("title", data.title);
        formData.append("price", data.price);
        formData.append("description", data.description);
        formData.append("imagen", data.imagen);
        
        try {
            const response = await fetch('http://localhost:5000/productos', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert("Los datos se enviaron correctamente :).");
                setData({
                    email: "",
                    title: "",
                    price: "",
                    description: "",
                    imagen: null,
                });
            } else {
                throw new Error('Error al enviar los datos al servidor.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al enviar los datos.');
        }
    };

    return (
        <div className="product-form">
            <h1 className="form__logo">Connecticut</h1>
            <form className="productForm" id="productForm" encType="multipart/form-data" onSubmit={handleSubmit}>
                <TextBox label='Email del empleado:' name='email' type='email' onChange={handleChange} required={true} value={data.email} />
                <TextBox label='Título del producto:' type='text' onChange={handleChange} required={true} name="title" value={data.title}/>
                <TextBox label='Precio:' type='text' onChange={handleChange} required={true} name="price" value={data.price}/>
                <label className="labelForm" htmlFor="imagen">
                Adjuntar imágenes:<span className="required">*obligatorio</span>
                </label>
                <input
                    className="inputData"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    required
                    name="imagen"
                />
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