import React from "react";
import {MainLayout} from "../layout/MainLayout";
import Card from "../components/Card/Card";

const NosotrosContent = () => {
    return (
        <ul className="cards-container">
            <Card 
            image='./images/nosotros/Yo.JPG'
            title='Federico A. Sáenz'
            description='Nuestro creador y CEO. La mente maestra. EL KINGA.'
            price='GRATIS'
            />
            <Card 
            image='./images/nosotros/Seba.PNG'
            title='Sebastián Ledesma'
            description='Nuestro co-creador y co-CEO. Experiencia, filosofía y sabiduría. EL CO-KINGA.'
            price='GRATIS'
            />
            <Card 
            image='./images/nosotros/SteveWozniak.jpg'
            title='Steve G. Wozniak'
            description='¿¿Qué hace acá?? Nosotros tampoco sabemos. En fin, EL WOZ.'
            price='GRATIS'
            />
        </ul>
    );
}

const Nosotros = () => {
    const nosotrosTitle = "Este es nuestro equipo de trabajo :)";
    const nosotrosDescription = "Nosotros:";
    return (
        <>
            <MainLayout pageTitle={nosotrosTitle} pageDescription={nosotrosDescription}>
                <NosotrosContent />
            </MainLayout>
        </>
    );
};
export default Nosotros;