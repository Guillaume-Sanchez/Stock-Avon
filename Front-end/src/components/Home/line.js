import  React, { useState } from "react";

import {updateObjet, deleteObjet} from './ApiStock';


const Line = ({data, setStock}) => {

    const [amount, setAmount] = useState(data.amount);

  const addObject = (data, amount) => {

    let newAmount = amount + 1;

    updateObjet(data.id, newAmount, setStock)
    setAmount(newAmount);

  }

  const lostObject = (data, amount) => {

    let newAmount = amount - 1;

    if(amount === 0){
      //console.log('on est à zero')
      updateObjet(data.id, 0)
      setAmount(0);
    } 
    else{
      updateObjet(data.id, newAmount, setStock)
      setAmount(newAmount);
    };
  }

  const hundleDelete = (id) => {
    deleteObjet(id, setStock);
  }

    return (

                <tr>
                    <td>{data.name}</td>
                    <td>{amount}</td>
                    <td><button onClick={() => addObject(data, amount)} type="button" className="btn btn-outline-secondary">+</button></td>
                    <td><button onClick={() => lostObject(data, amount)} type="button" className="btn btn-outline-secondary">-</button></td>
                    <td className="text-right">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-danger dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown-menu">
                                <button onClick={(evt) => hundleDelete(data.id)} className="dropdown-item">Oui, je veux supprimer</button>
                                <a className="dropdown-item" href="#" data-toggle="dropdown">Annuler</a>
                            </div>
                        </div>
                    </td>
                </tr>
    )
}

export default Line;
