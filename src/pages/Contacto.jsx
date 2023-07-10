import MainLayout from "../layout/MainLayout";
import Main from "../layout/Main/Main";

const ContactoContent = () => {
    return (
        <div className="contact-form">
            <h1 className="form__logo">Connecticut</h1>
            <form className="productForm" id="contactForm">
                <label className="labelForm" htmlFor="nombre">Nombre:<span className="required">*obligatorio</span></label>
                <input className="inputData" type="text" id="name" name="nombre" required />
                <label className="labelForm" htmlFor="edad">Edad:<span className="required">*obligatorio</span></label>
                <input className="inputData" type="number" id="age" name="edad" required />
                <label className="labelForm" htmlFor="email">Email:<span className="required">*obligatorio</span></label>
                <input className="inputData" type="email" id="email" name="email" required />
                <label className="labelForm" htmlFor="asunto">Asunto:<span className="required">*obligatorio</span></label>
                <input className="inputData" type="text" id="about" name="asunto" required />
                <label className="labelForm" htmlFor="textareaDescription">Mensaje:<span className="required">*obligatorio</span></label>
                <textarea className="textareaData" id="message" name="message" required />
                <input type="submit" className="contact-form__send" value="Enviar" />
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