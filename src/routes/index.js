var express = require('express');
var router = express.Router();

var products = require('./products');
var cards = require('./carts');

router.use('/productos', products);
router.use('/carritos', cards);

module.exports = router;
