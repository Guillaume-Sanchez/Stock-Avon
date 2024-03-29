import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/images/28189-200.png'

import './header.scss';

const Header = () => {
  return (
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar navbar-dark header-nav">
            <img className="header-img" id="logo" src={Logo} alt="logo stock Avon" />
            <NavLink className="navbar-brand" to="/">Stock d'Avon</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    </header>
  );
}

export default Header;