import  React, { useState } from "react";

import {login} from '../../Api/ApiUser';
import "./login.scss"


const Login = ({setLoginScreen, setUserInfo, setIsLogged}) => {

    const [password, setPassword] = useState("");

    const hundleCancel = () => {
        setLoginScreen(false)
    }

    const onChangePassword = (evt) => {
        setPassword(evt.target.value);
    }

    const hundlesubmit = (evt) => {
        evt.preventDefault();
        login(password, setUserInfo, setIsLogged);
        setLoginScreen(false);
    }

    return (

        <div className="modal">

            <form onSubmit={hundlesubmit} className="modal-wrapper">
                <div className="mb-3 d-flex justify-content-end">
                    <a to="" onClick={hundleCancel} className="btn btn-danger">X</a>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Utilisateur</label>
                    <input type="text" className="form-control" disabled value="Admin" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                    <input onChange={onChangePassword} type="password" className="form-control" value={password} />
                </div>

                <div className="mb-3 d-flex justify-content-around">
                    <button type="submit" className="btn btn-success m-1">Connexion <i class="fas fa-sign-in-alt"></i></button>
                    <a onClick={hundleCancel} className="btn btn-danger m-1">Annuler</a>
                </div>
            </form>

        </div>
    )
}

export default Login;
