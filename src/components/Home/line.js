import  React, { useState } from "react";

const Line = ({data}) => {

    const [donnee, setData] = useState(data);
    const [amount, setAmount] = useState(data.amount);
    const [name, setName] = useState(data.name);

  const addObject = (data, amount, name) => {
    
    let newAmount = amount + 1;
    setAmount(newAmount);
  }

  const lostObject = (data, amount, name) =>{
    let newAmount = amount - 1;
    if(amount === 0){
        console.log('on est à zero')
        setAmount(0);
    } 
    else{
        setAmount(newAmount)
    };
  }

    return (

                <tr key={data.name}>
                    <td>{name}</td>
                    <td>{amount}</td>
                    <td><button onClick={() => addObject(data, amount, name)} type="button" className="btn btn-outline-secondary">+</button></td>
                    <td><button onClick={() => lostObject(data, amount, name)} type="button" className="btn btn-outline-secondary">-</button></td>
                </tr>
    )
}

export default Line;
