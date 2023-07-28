import React from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav className="nav__bar">
            <span className="nav__bar--logo">
                <Link to="/" className="nav__bar--logo__link">Connecticut</Link>
            </span>
            <ul className="nav-bar__nav-list">
                <li className="nav-bar__nav-item">
                    <NavLink to="/" className="nav-bar__nav-link">Inicio</NavLink>
                </li>
                <li className="nav-bar__nav-item">
                    <NavLink to="/Alta" className="nav-bar__nav-link">Alta</NavLink>
                </li>
                <li className="nav-bar__nav-item">
                    <NavLink to="/Contacto" className="nav-bar__nav-link">Contacto</NavLink>
                </li>
                <li className="nav-bar__nav-item">
                    <NavLink to="/Nosotros" className="nav-bar__nav-link">Nosotros</NavLink>
                </li>
            </ul>
            <ul className="nav-bar__nav-list--account">
                <li className="nav-bar__nav-item--account">
                    <Link to="/" className="nav-bar__nav-link">
                        <i className="fa-brands fa-youtube nav-bar__icons"></i>
                    </Link>
                </li>
                <li className="nav-bar__nav-item--account"> 
                    <Link to="/" className="nav-bar__nav-link">
                        <i className="fa-brands fa-instagram nav-bar__icons"></i>
                    </Link>
                </li>
                <li className="nav-bar__nav-item--account">    
                    <Link to="/" className="nav-bar__nav-link">
                        <i className="fa-brands fa-facebook nav-bar__icons"></i>
                    </Link>
                </li>
                <li className="nav-bar__nav-item--account">
                    <Link to="/" className="nav-bar__nav-link">
                        <i className="fa-solid fa-circle-user nav-bar__icons"></i>
                    </Link>
                </li>
                <li className="nav-bar__nav-item--account">
                    <Link to="/" className="nav-bar__nav-link nav-link__sign-in">
                        Registrarse
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;