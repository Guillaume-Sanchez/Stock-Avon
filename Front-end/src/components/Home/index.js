import React, { useState, useEffect } from 'react';

import Line from '../Line'
import AddOBject from '../AddObjet'
import Login from '../Login'

import {fetchStockList} from '../../Api/ApiStock';
import {loginCheck} from '../../Api/ApiUser';


const Home = () => {

  const [Stock, setStock] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [addObjectScreen, setAddObjectScreen] = useState(false);
  const [loginScreen, setLoginScreen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    fetchStockList(setStock);
    loginCheck(setUserInfo, setIsLogged)
  }, []);

  const hundleAdd = () => {
    setAddObjectScreen(true);
  }

  const hundleLogin = () => {
    setLoginScreen(true);
  }

  const hundleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  }

    return (

      <main className="container mt-5 mb-5">
        <div>
          {
            isLogged === true && (
              <>
                <button to="" onClick={hundleLogout} className="btn btn-danger float-right m-1">Déconnexion <i class="fas fa-sign-out-alt"></i></button>
                <button to="" onClick={hundleAdd} className="btn btn-success float-right m-1">Ajouter <i class="fas fa-plus"></i></button>
              </>
            )
          }
                    {
            isLogged === false && (
              <>
                <button to="" onClick={hundleLogin} className="btn btn-success float-right m-1">Connexion <i class="fas fa-sign-in-alt"></i></button>
              </>
            )
          }
            <h2>Liste des Stock d'Avon</h2>
          <table className="table table-hover mt-4">
              <thead>
                  <tr>
                      <th scope="col">Produit</th>
                      <th scope="col">Quantité</th>
                      {
                        isLogged === true && (
                          <>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </>
                        )
                        }
                  </tr>
              </thead>
              <tbody>

              {Stock.map((data) => (

                <Line key={data.name} data={data} setStock={setStock} isLogged={isLogged} />

              ))}

              </tbody>
          </table>
        </div>

        {
          addObjectScreen === true && (
            <AddOBject setAddObjectScreen={setAddObjectScreen} setStock={setStock} />
          )
        }

        {
          loginScreen === true && (
            <Login setLoginScreen={setLoginScreen} setUserInfo={setUserInfo} setIsLogged={setIsLogged} />
          )
        }
        
      </main>
    )
}

export default Home;

/* JSON.stringify */