import React from "react";
import './NavBarBottom.scss'

const NavBarBottom = () => {
    return (
        <div className="nav__bar--bottom">
            <div className="catalogue">
                <button className="catalogue__button">Catálogo
                    <i className="fa fa-caret-down"> </i>
                </button>
                <div className="catalogue__menu">
                    <a href="#">Smartphones</a>
                    <a href="#">Audio y Video</a>
                    <a href="#">Drones</a>
                    <a href="#">Fotografía</a>
                    <a href="#">Streaming</a>
                    <a href="#">Lavarropas</a>
                    <a href="#">Google</a>
                    <a href="#">Apple</a>
                </div>
            </div> 
            <div className="search-bar">
                <input type="text" placeholder="Buscar.." />
                <button className="search-bar__button">
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className="cart">
                <button className="cart__button">
                <i className="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    );
};
export default NavBarBottom;