import { useState } from "react";
import FormButton from "../components/FormButton/FormButton";
import TextArea from "../components/TextArea/TextArea";
import TextBox from "../components/TextBox/TextBox";
import MainLayout from "../layout/MainLayout";
import { validateName, validateAge, validateEmail, validateAbout, validateMessage } from "../services/formValidation";

const ContactoContent = () => {
    const [data, setData] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, ...{ [name]: value} });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ((
            !validateName(data.name) ||
            !validateAge(data.age) ||
            !validateEmail(data.email) ||
            !validateAbout(data.about) ||
            !validateMessage(data.message)
          )
        ) ? 
        (
            alert("Por favor, verifique los campos del formulario.")
        ) : (
            alert("Los datos se enviaron correctamente :).")
        );
    };
    return (
        <div className="contact-form">
            <h1 className="form__logo">Connecticut</h1>
            <form className="productForm" id="contactForm" onSubmit={handleSubmit}>
                <TextBox label='Nombre:' name='name' type='text' required={true} onChange={handleChange} />
                <TextBox label='Edad:' name='age' type='text' required={true} onChange={handleChange} />
                <TextBox label='Email:' name='email' type='email' required={true} onChange={handleChange} />
                <TextBox label='Asunto:' name='about' type='text' required={true} onChange={handleChange} />
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