// Require

const bcrypt = require('bcrypt');
const models = require('../models');
const asyncLib = require('async');
const fs = require('fs');
const multer = require('multer');

exports.createStock = async (req, res) => {
  try {

    console.log(req.body, req.file)

    let nameSend = req.body.name;
    let amountSend = req.body.amount;

    models.Stock.create({
      name: nameSend,
      amount: amountSend
    }).then((stock) => {
      const message = 'L\'objet a bien été ajouté.'
      res.status(201).json({ message, data: stock })
    })
    .catch(error => {
      const message = 'L\'objet n\'a pas pu être ajouté. Réessayer dans quelques instant.'
      res.status(500).json({ message, data: error})
    })

  } catch (error) {
    console.log(error);
    return res.send(`Une erreur est survenue lors de l'ajout de l\'objet: ${error}`);
  }
};

exports.findAllStockList = (req, res, next) => {

  models.Stock.findAll()
  .then(stocks => {
    const message = 'La liste de tous les objet à bien été récupérée.'
    res.status(200).json({ message, data: stocks })
  })
  .catch(error => {
    const message = 'La liste de tout les objets n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

};

exports.updateStock = (req, res, next) => {

    const id = req.params.id

    console.log(req.body)
    console.log(req.headers)

    models.Stock.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      models.Stock.findByPk(id).then(membre => {
        const message = `Le membre ${membre.name} a bien été modifié.`
        res.status(201).json({message, data: membre })
      })
      .catch(error => {
        const message = 'Le membre n\'a pas pu être modifié. Réessayer dans quelques instant.'
        res.status(500).json({ message, data: error})
      })
    })
    .catch(error => {
      const message = 'Le membres n\a pas pu être modifié.'
      res.status(500).json({ message, data: error})
    })

}

exports.deleteStock = (req, res, next) => {

  const id = req.params.id

  models.Stock.findByPk(req.params.id).then(stock => {
    const stockDeleted = stock;
    models.Stock.destroy({
      where: { id: stock.id }
    })
    .then(_ => {
      const message = `L\'objet ${stockDeleted.name} avec l'identifiant n°${stockDeleted.id} a bien été supprimé.`
      res.json({message, data: stockDeleted })
    })
    .catch(error => {
      const message = 'L\'objet n\'as pas pu être supprimé'
      res.status(500).json({ message, data: error})
    })
  })

}
