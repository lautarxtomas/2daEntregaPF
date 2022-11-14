const mongoose = require('mongoose');

const cartsSchema = new mongoose.Schema({
  products: { type: Array, require: false },
  timestamp: { type: String, require: true },
});

module.exports = mongoose.model('carts', cartsSchema);
