const express = require('express');
const router = express.Router();
const {
  createCart,
  addProductToCart,
  getCartById,
  deleteCartById,
  deleteProductCart,
} = require('../controller/cart.controller');

router.post('/', createCart);

router.post('/:id/productos', addProductToCart);

router.get('/:id/productos', getCartById);

router.delete('/:id/productos', deleteCartById);

router.delete('/:id/productos/:idProd', deleteProductCart);

module.exports = router;
