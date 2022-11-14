const express = require('express');
const router = express.Router();
const isAdmin = require('../middlewares')
const {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require('../controller/product.controller');


router.get('/', getProducts);

router.get('/:id', getProductById);

router.post('/', isAdmin, createProduct);

router.put('/:id', isAdmin, updateProductById);

router.delete('/:id', isAdmin, deleteProductById);

module.exports = router;
