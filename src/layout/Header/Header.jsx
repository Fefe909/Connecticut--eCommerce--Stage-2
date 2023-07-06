import React from 'react';
import './Header.scss'
import NavBar from '../NavBar/NavBar';
import NavBarBottom from '../NavBarBottom/NavBarBottom';

const Header = ({ children }) => {
    return (
        <header className='main__header'>
            <NavBar children={ children }/>
            <NavBarBottom children={ children }/>
        </header>
    );
}
export default Header;