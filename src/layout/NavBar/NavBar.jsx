import React from "react";
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav className="nav__bar">
            <span className="nav__bar--logo">
                <a className="nav__bar--logo__link" href="./index.html">Connecticut</a>
            </span>
            <ul className="nav-bar__nav-list">
                <li className="nav-bar__nav-item">
                <a href="./index.html" className="nav-bar__nav-link">Inicio</a>
                </li>
                <li className="nav-bar__nav-item">
                <a href="./src/pages/alta.html" className="nav-bar__nav-link">Alta</a>
                </li>
                <li className="nav-bar__nav-item">
                <a href="./src/pages/contacto.html" className="nav-bar__nav-link">Contacto</a>
                </li>
                <li className="nav-bar__nav-item">
                <a href="./src/pages/nosotros.html" className="nav-bar__nav-link">Nosotros</a>
                </li>
            </ul>
            <ul className="nav-bar__nav-list--account">
                <li className="nav-bar__nav-item--account">
                <a href="#" className="nav-bar__nav-link">Registrarse</a>
                </li>
                <span className="nav-bar__nav-item--account--divider">|</span>
                <li className="nav-bar__nav-item--account">
                <a href="#" className="nav-bar__nav-link">Iniciar Sesión</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;