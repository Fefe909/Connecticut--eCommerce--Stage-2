import MainLayout from "../layout/MainLayout";
import Main from "../layout/Main/Main";

const ContactoContent = () => {
    <div>
        <h1>Hola</h1>
    </div>
};

const Contacto = () => {
    return (
        <>
            <MainLayout>
                <Main >
                    <ContactoContent/>
                    
                </Main>
            </MainLayout>
        </>
    );
};
export default Contacto;