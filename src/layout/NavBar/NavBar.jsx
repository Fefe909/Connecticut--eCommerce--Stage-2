import React from "react";
import { Link } from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav className="nav__bar">
            <span className="nav__bar--logo">
                <Link to="/Home" className="nav__bar--logo__link">Connecticut</Link>
            </span>
            <ul className="nav-bar__nav-list">
                <li className="nav-bar__nav-item">
                    <Link to="/Home" className="nav-bar__nav-link">Inicio</Link>
                </li>
                <li className="nav-bar__nav-item">
                    <Link to="/Alta" className="nav-bar__nav-link">Alta</Link>
                </li>
                <li className="nav-bar__nav-item">
                    <Link to="/Contacto" className="nav-bar__nav-link">Contacto</Link>
                </li>
                <li className="nav-bar__nav-item">
                    <Link to="/Nosotros" className="nav-bar__nav-link">Nosotros</Link>
                </li>
            </ul>
            <ul className="nav-bar__nav-list--account">
                <li className="nav-bar__nav-item--account">
                    <Link to="/" className="nav-bar__nav-link">Registrarse</Link>
                </li>
                <span className="nav-bar__nav-item--account--divider">|</span>
                <li className="nav-bar__nav-item--account">
                    <Link to="/" className="nav-bar__nav-link">Iniciar Sesión</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;