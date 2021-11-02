import React, { useState, useEffect } from 'react';

import Line from './line'
import AddOBject from '../AddObjet'

import {fetchStockList} from './ApiStock';


const Home = () => {

  const [Stock, setStock] = useState([]);
  const [addObjectScreen, setAddObjectScreen] = useState(false);

  useEffect(() => {
    fetchStockList(setStock);
  }, []);

  const hundleAdd = () => {
    setAddObjectScreen(true);
  }

    return (

      <main className="container mt-5 mb-5">
        <div>
            <button to="" onClick={hundleAdd} className="btn btn-success float-right m-1">Ajouter</button>
            <h2>Liste des Stock d'Avon</h2>
          <table className="table table-hover mt-4">
              <thead>
                  <tr>
                      <th scope="col">Produit</th>
                      <th scope="col">Quantité</th>
                      <th scope="col">Ajout</th>
                      <th scope="col">Retrait</th>
                      <th scope="col"></th>
                  </tr>
              </thead>
              <tbody>

              {Stock.map((data) => (

                <Line key={data.name} data={data} setStock={setStock} />

              ))}

              </tbody>
          </table>
        </div>

        {
          addObjectScreen === true && (
            <AddOBject setAddObjectScreen={setAddObjectScreen} setStock={setStock} />
          )
        }
        
      </main>
    )
}

export default Home;

/* JSON.stringify */