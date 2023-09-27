import { useState } from "react";
import FormButton from "../components/FormButton/FormButton";
import TextArea from "../components/TextArea/TextArea";
import TextBox from "../components/TextBox/TextBox";
import {MainLayout} from "../layout/MainLayout";
import { validateName, validateAge, validateEmail, validateAbout, validateMessage } from "../services/formValidation";

const ContactoContent = () => {
    const [data, setData] = useState({
        name: '',
        age: '',
        email: '',
        about: '',
        message: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, ...{ [name]: value} });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateName(data.name) || 
            !validateAge(data.age) ||
            !validateEmail(data.email) || 
            !validateAbout(data.about) || 
            !validateMessage(data.message)
        ) {
            alert("Por favor, verifique los campos del formulario.");
            return;
        }
        
        try {
            const response = await fetch('http://localhost:5000/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            if (response.ok) {
                alert("Los datos se enviaron correctamente :).");
                setData({
                    name: '',
                    age: '',
                    email: '',
                    about: '',
                    message: ''
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
        <div className="contact-form">
            <h1 className="form__logo">Connecticut</h1>
            <form className="productForm" id="contactForm" method="POST" onSubmit={handleSubmit}>
                <TextBox label='Nombre:' name='name' type='text' required={true} value={data.name} onChange={handleChange} />
                <TextBox label='Edad:' name='age' type='text' required={true} value={data.age} onChange={handleChange} />
                <TextBox label='Email:' name='email' type='email' required={true} value={data.email} onChange={handleChange} />
                <TextBox label='Asunto:' name='about' type='text' required={true} value={data.about} onChange={handleChange} />
                <TextArea label='Mensaje:' name='message' rows={3} value={data.message} required={true} onChange={handleChange} />
                <FormButton data={data} />
            </form>
        </div>  
    );
};

const Contacto = () => {
    const contactoTitle = "Envíanos un mensaje o una sugerencia :)";
    const contactoDescription = "Llena el formulario y dale click en 'Enviar'";
    return (
        <>
            <MainLayout pageTitle={contactoTitle} pageDescription={contactoDescription}>
                <ContactoContent/>
            </MainLayout>
        </>
    );
};
export default Contacto;