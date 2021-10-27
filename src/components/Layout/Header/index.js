import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar navbar-light header-nav">
            <NavLink className="navbar-brand" to="/">Mon site</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Accueil <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/exemple">Exemple</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default Header;