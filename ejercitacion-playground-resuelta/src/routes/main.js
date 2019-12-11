// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.root); /* GET - home page */
router.get('/product/detail/:id/:category', mainController.detail); /* GET - product detail */

module.exports = router;
