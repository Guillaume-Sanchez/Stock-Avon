import  React, { useState } from "react";

import {fetchStockList, updateObjet} from './ApiStock';


const Line = ({data}) => {

    const [amount, setAmount] = useState(data.amount);

  const addObject = (data, amount) => {

    let newAmount = amount + 1;

    updateObjet(data.id, newAmount)
    setAmount(newAmount);

  }

  const lostObject = (data, amount) =>{

    let newAmount = amount - 1;

    if(amount === 0){
      //console.log('on est à zero')
      updateObjet(data.id, 0)
      setAmount(0);
    } 
    else{
      updateObjet(data.id, newAmount)
      setAmount(newAmount);
    };
  }

    return (

                <tr>
                    <td>{data.name}</td>
                    <td>{amount}</td>
                    <td><button onClick={() => addObject(data, amount)} type="button" className="btn btn-outline-secondary">+</button></td>
                    <td><button onClick={() => lostObject(data, amount)} type="button" className="btn btn-outline-secondary">-</button></td>
                </tr>
    )
}

export default Line;
