import React from 'react';
import './Header.scss'
import NavBar from '../NavBar/NavBar';
import NavBarBottom from '../NavBarBottom/NavBarBottom';

const Header = () => {
    return (
        <header className='main__header'>
            <NavBar />
            <NavBarBottom />
        </header>
    );
}
export default Header;