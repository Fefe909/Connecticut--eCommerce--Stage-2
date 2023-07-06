import React from 'react';
import './Footer.scss';

const Footer = ({ children }) => {
    return (
        <footer className="footer">
            <div className="footer__left">
                <p>powered by</p>
                <h1 className="footer__logo">Connecticut</h1>
                <a href="#" className="footer--links">Servicio técnico</a>
                <a href="#" className="footer--links">Información legal</a>
                <a href="#" className="footer--links">Botón de arrepentimiento</a>
                <a href="#" className="footer--links">Protección de Usuarios Financieros</a>
            </div>
            <div className="footer__right">
                <p>Recomendados</p>
                <a href="#" className="footer--links">Smartphones</a>
                <a href="#" className="footer--links">Smart TVs</a>
                <a href="#" className="footer--links">Drones</a>
                <a href="#" className="footer--links">Google</a>
                <a href="#" className="footer--links">Apple</a>
                <a href="#" className="footer--links">Novedades</a>
            </div>
        </footer>
    );
}
export default Footer;

