import React from "react";
import '../assets/scss/pages/Nosotros.scss';
import MainLayout from "../layout/MainLayout";
import CeoImage from '../assets/images/nosotros/Yo.JPG';
import CoCeoImage from '../assets/images/nosotros/Seba.PNG';
import Wozniak from '../assets/images/nosotros/SteveWozniak.jpg';

const NosotrosContent = () => {
    return (
        <section>
            <ul className="cards-container">
                <li className="card">
                    <div className="card__image-container">
                        <img src={CeoImage} alt="Federico A Sáenz - CEO" />
                    </div>
                    <div className="card__content">
                        <h2 className="card__content--heading">Federico A. Sáenz</h2>
                        <div className="card__content--description">
                            <p className="card__content--description-text">
                                Nuestro creador y CEO.<br/>
                                La mente maestra.<br/>
                                EL KINGA.
                            </p>
                        </div>
                    </div>
                    <div className="card__price">
                        <p className="card__price--final">AR$ GRATIS</p>
                    </div>
                    <a className="card__button" href="#">Enviar mensaje</a>
                </li>
                <li className="card">
                    <div className="card__image-container">
                        <img src={CoCeoImage} alt="Sebastian Ledesma - co-CEO" />
                    </div>
                    <div className="card__content">
                        <h2 className="card__content--heading">Sebastián Ledesma</h2>
                        <div className="card__content--description">
                        <p className="card__content--description-text">
                            Nuestro co-creador y co-CEO.<br/>
                            Experiencia, filosofía y sabiduría.<br/>
                            EL CO-KINGA.
                        </p>
                        </div>
                    </div>
                    <div className="card__price">
                        <p className="card__price--final">AR$ GRATIS</p>
                    </div>
                    <a className="card__button" href="#">Enviar mensaje</a>
                </li>
                <li className="card">
                    <div className="card__image-container">
                        <img src={Wozniak} alt="Steve Wozniak - Apple" />
                    </div>
                    <div className="card__content">
                        <h2 className="card__content--heading">Steve Wozniak</h2>
                        <div className="card__content--description">
                        <p className="card__content--description-text">
                            ¿¿Qué hace acá??<br/>
                            Nosotros tampoco sabemos.<br/>
                            En fin, EL WOZ.
                        </p>
                        </div>
                    </div>
                    <div className="card__price">
                        <p className="card__price--final">AR$ GRATIS</p>
                    </div>
                    <a className="card__button" href="#">Enviar mensaje</a>
                </li>
            </ul>
        </section>
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