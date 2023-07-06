import React from "react";
import '../assets/scss/pages/Nosotros.scss';

const Nosotros = () => {
    return (
        <main>
            <section>
            <div class="section__header">
                <h1>Este es nuestro equipo de trabajo :)</h1>
                <p>Nosotros:</p>
            </div>
                <ul class="cards-container">
                    <li class="card">
                        <div class="card__image-container">
                            <img src="./../img/nosotros/Yo.JPG" alt="Federico A Sáenz - CEO" />
                        </div>
                        <div class="card__content">
                            <h2 class="card__content--heading">Federico A. Sáenz</h2>
                            <div class="card__content--description">
                                <p class="card__content--description-text">
                                    Nuestro creador y CEO.<br/>
                                    La mente maestra.<br/>
                                    EL KINGA.
                                </p>
                            </div>
                        </div>
                        <div class="card__price">
                            <p class="card__price--final">AR$ GRATIS</p>
                        </div>
                        <a class="card__button" href="#">Enviar mensaje</a>
                    </li>
                    <li class="card">
                        <div class="card__image-container">
                            <img src="./../img/nosotros/Seba.PNG" alt="Sebastian Ledesma - co-CEO" />
                        </div>
                        <div class="card__content">
                            <h2 class="card__content--heading">Sebastián Ledesma</h2>
                            <div class="card__content--description">
                            <p class="card__content--description-text">
                                Nuestro co-creador y co-CEO.<br/>
                                Experiencia, filosofía y sabiduría.<br/>
                                EL CO-KINGA.
                            </p>
                            </div>
                        </div>
                        <div class="card__price">
                            <p class="card__price--final">AR$ GRATIS</p>
                        </div>
                        <a class="card__button" href="#">Enviar mensaje</a>
                    </li>
                    <li class="card">
                        <div class="card__image-container">
                            <img src="./../img/nosotros/SteveWozniak.jpg" alt="Steve Wozniak - Apple" />
                        </div>
                        <div class="card__content">
                            <h2 class="card__content--heading">Steve Wozniak</h2>
                            <div class="card__content--description">
                            <p class="card__content--description-text">
                                ¿¿Qué hace acá??<br/>
                                Nosotros tampoco sabemos.<br/>
                                En fin, EL WOZ.
                            </p>
                            </div>
                        </div>
                        <div class="card__price">
                            <p class="card__price--final">AR$ GRATIS</p>
                        </div>
                        <a class="card__button" href="#">Enviar mensaje</a>
                    </li>
                </ul>
            </section>
        </main>
    );
};
export default Nosotros;