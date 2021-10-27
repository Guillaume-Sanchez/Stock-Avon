import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg'
import './home.scss';

const Home = () => {
  return (
    <main className="Home">
      <div className="Home-content">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Edit <code>src/components/Home/index.js</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </main>
  );
}

export default Home;