import React from 'react';

const Exemple = ({ handleEdit, handleAdd, listJeux, hundleDeleteJeu, hundleDeleteJeuId, isActiveOrNot }) => {

    return (

      <main className="container membreGestion mt-5 mb-5">
        <div>
          <button onClick={handleAdd} to="" className="btn btn-success float-right">Ajouter</button>
          <h2>Liste des Jeux</h2>
          <table className="table table-hover mt-4">
              <thead>
                  <tr>
                      <th scope="col">Nom</th>
                      <th scope="col">nombre</th>
                  </tr>
              </thead>
              <tbody>

                <tr>
                    <td>name</td>
                    <td>nombre</td>
                </tr>

              </tbody>
          </table>
        </div>
      </main>
    )
}

export default Exemple;