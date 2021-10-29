import  React, { useState } from "react";

import {fetchStockList, updateObjet} from './ApiStock';


const AddObjet = () => {

    return (

    <form>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Nom du produit</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Quantité</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>

        <div className="mb-3 d-flex justify-content-around">
            <button type="submit" className="btn btn-success m-1">Ajouter</button>
            <button type="submit" className="btn btn-danger m-1">Annuler</button>
        </div>
    </form>
    )
}

export default AddObjet;
