// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import
import './app.scss';

import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Home from '../Home';
import Error404 from '../Error404';


const App = () => {

  return (
    <div className="app">
      <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
