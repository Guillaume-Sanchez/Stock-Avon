import React from 'react';

import Line from './line'
import datas from '../../assets/data/data.json'


const Home = () => {

  const addObject = (data, amount, name) => {

    let dataTarget = data.stock

    console.log(dataTarget)
    
    // let newAmount = amount + 1;
    // console.log(newAmount);

    // let dataJson = JSON.parse(data);

    // console.log(dataJson)


  }

  const lostObject = (amount) =>{
    alert(amount)
  }

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
                      <th scope="col">Ajout</th>
                      <th scope="col">Retrait</th>
                  </tr>
              </thead>
              <tbody>

              {datas.stock.map((data) => (

                <Line data={data} />

              ))}

              </tbody>
          </table>
        </div>
      </main>
    )
}

export default Home;

/* JSON.stringify */