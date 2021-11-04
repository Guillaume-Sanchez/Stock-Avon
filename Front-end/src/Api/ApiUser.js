import axios from 'axios';

export const login = (password, setUserInfo, setIsLogged) => {
    axios.post(`http://10.20.8.233:3001/api/auth/login`,{
      email: "admin@localhost.fr",
      password: password
    },{
      headers: {
        'Content-Type': 'application/JSON',
      }
    })
    .then((response) => {
      //alert('modifié')
      setIsLogged(true);
      setUserInfo(response.data);
      localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      alert("impossible de se connecter", error);
    })
    .finally(() => {
      // console.log("tout c'est bien passé !");
    });
};

export const loginCheck = (setUserInfo, setIsLogged) => {

  let token = localStorage.getItem("token");

  axios.post(`http://10.20.8.233:3001/api/auth/logincheck`,{
    token: token
  },{
    headers: {
      'Content-Type': 'application/JSON',
    }
  })
  .then((response) => {
    //alert('modifié')
    setIsLogged(true);
    setUserInfo(response.data);
  })
  .catch((error) => {
    //
  })
  .finally(() => {
    // console.log("tout c'est bien passé !");
  });
};