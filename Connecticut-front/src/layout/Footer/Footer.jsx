import React from 'react';
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__section">
                <p>powered by</p>
                <h1 className="footer__logo">Connecticut</h1>
                <a href="#" className="footer--links">Servicio técnico</a>
                <a href="#" className="footer--links">Información legal</a>
                <a href="#" className="footer--links">Botón de arrepentimiento</a>
                <a href="#" className="footer--links">Protección de Usuarios Financieros</a>
            </div>
            <div className="footer__section">
                <p>Secciones</p>
                <Link to="/" className="footer--links">Home</Link>
                <Link to="/Alta" className="footer--links">Alta de producto</Link>
                <Link to="/Contacto" className="footer--links">¡Envíanos un mensaje!</Link>
                <Link to="/Nosotros" className="footer--links">Acerca de nosotros</Link>
            </div>            
            <div className="footer__section">
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