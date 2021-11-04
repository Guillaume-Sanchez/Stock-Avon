import axios from 'axios';

export const fetchStockList = (Stock) => {
    axios.get('http://10.20.8.233:3001/api/stock')
      .then((response) => {
        // console.log(response.data.data)
        Stock(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // console.log("tout c'est bien passé !");
      });
  };

export const updateObjet = (id, amount, setStock) => {
  axios.put(`http://10.20.8.233:3001/api/stock/${id}`,{
    amount: amount
  },{
    headers: {
      'Content-Type': 'application/JSON',
    }
  })
  .then((response) => {
    //alert('modifié')
    fetchStockList(setStock);
  })
  .catch((error) => {
  })
  .finally(() => {
    // console.log("tout c'est bien passé !");
  });
};

export const addObjet = (name, amount, setStock) => {
  axios.post(`http://10.20.8.233:3001/api/stock`,{
    name: name,
    amount: amount
  },{
    headers: {
      'Content-Type': 'application/JSON',
    }
  })
  .then((response) => {
    alert(`L'objet "${name}" a été ajouté`)
    fetchStockList(setStock);
  })
  .catch((error) => {
    alert(`L'objet "${name}" n'a pas pu être ajouté`)
  })
  .finally(() => {
    // console.log("tout c'est bien passé !");
  });
}

export const deleteObjet = (id, setStock) => {
  axios.delete(`http://10.20.8.233:3001/api/stock/${id}`,{
    headers: {
      'Content-Type': 'application/JSON',
    }
  })
    .then((response) => {
      alert(`L'objet "${response.data.data.name}" a été supprimé`)
      fetchStockList(setStock);
    })
    .catch((error) => {
      alert(`L'objet n'a pas pu être supprimé`)
    })
    .finally(() => {
      // console.log("tout c'est bien passé !");
    });
};