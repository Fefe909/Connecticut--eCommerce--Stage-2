import React from "react";
import './NavBarBottom.scss'
import SearchBar from '../../components/SearchBar/SearchBar';

const NavBarBottom = () => {
    return (
        <div className="nav__bar--bottom">
            <div className="catalogue">
                <button className="catalogue__button">{'Catálogo '}
                    <i className="fa fa-caret-down"></i>
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
            <SearchBar />
            <div className="cart">
                <button className="cart__button">
                    <i className="fa-solid fa-cart-shopping"></i>{' Carrito'}
                </button>
            </div>
        </div>
    );
};
export default NavBarBottom;