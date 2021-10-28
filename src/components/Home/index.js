import React from 'react';

import datas from '../../assets/data/data.json'

const Home = () => {

  console.log(datas.stock)

    return (

      <main className="container mt-5 mb-5">
        <div>
            <button to="" className="btn btn-success float-right m-1">Ajouter</button>
            <h2>Liste des Stock d'Avon</h2>
          <table className="table table-hover mt-4">
              <thead>
                  <tr>
                      <th scope="col">Produit</th>
                      <th scope="col">Quantité</th>
                  </tr>
              </thead>
              <tbody>

              {datas.stock.map((data) => (

                <tr key={data.name}>
                    <td>{data.name}</td>
                    <td>{data.amount}</td>
                </tr>

              ))}

              </tbody>
          </table>
        </div>
      </main>
    )
}

export default Home;

/* JSON.stringify */