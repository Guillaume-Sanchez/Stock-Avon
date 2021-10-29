// Require

const express = require('express');
const router = express.Router();

// Controller

const stockCtrl = require('../controllers/stock');

// Routes

router.post('/stock', stockCtrl.createStock);
router.get('/stock', stockCtrl.findAllStockList);
router.put('/stock/:id', stockCtrl.updateStock);
router.delete('/stock/:id', stockCtrl.deleteStock);

module.exports = router;