import  React, { useState } from "react";

import {addObjet} from '../Home/ApiStock';
import "./addObjet.scss"


const AddObjet = ({setAddObjectScreen, setStock}) => {

    const [nameProduct, setnameProduct] = useState("");
    const [amountProduct, setamountProduct] = useState("");

    const hundleCancel = () => {
        setAddObjectScreen(false)
    }

    const onChangeName = (evt) => {
        setnameProduct(evt.target.value);
    }

    const onChangeAmount = (evt) => {
        setamountProduct(evt.target.value);
    }

    const hundlesubmit = (evt) => {
        evt.preventDefault();
        addObjet(nameProduct, amountProduct, setStock);
        setAddObjectScreen(false);
    }

    return (

        <div className="modal">

            <form onSubmit={hundlesubmit} className="modal-wrapper">
                <div className="mb-3 d-flex justify-content-end">
                    <button to="" onClick={hundleCancel} className="btn btn-danger">X</button>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nom du produit</label>
                    <input onChange={onChangeName} type="text" className="form-control" id="exampleInputEmail1" value={nameProduct} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Quantité</label>
                    <input onChange={onChangeAmount} type="number" className="form-control" value={amountProduct} />
                </div>

                <div className="mb-3 d-flex justify-content-around">
                    <button type="submit" className="btn btn-success m-1">Ajouter</button>
                    <button onClick={hundleCancel} className="btn btn-danger m-1">Annuler</button>
                </div>
            </form>

        </div>
    )
}

export default AddObjet;
