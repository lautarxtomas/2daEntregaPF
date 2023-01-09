// Firebase
// const Daos = require('../daos/firebase/mainFirebaseDaos');
// const Cart = new Daos.cartDaos();

// Mongo ---> DESCOMENTAR PARA PROBAR CON MONGODB (COMENTAR EL REQUIRE DE FIREBASE)
const Daos = require('../daos/mongo/mainMongoDaos');
const Cart = new Daos.cartDaos();

module.exports = {
  createCart: async (req, res) => {
    try {
      const cart = await Cart.createCart();
      res.status(200).send({
        status: 200,
        data: {
          cart,
        },
        message: 'Cart was created successfully',
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        messages: error.message,
      });
    }
  },
  addProductToCart: async (req, res) => {
    try {
      if (!req.body.id) {
        throw Error('You should add an product');
      }
      if (!req.params.id) {
        throw Error('You should choose a cart');
      }
      const idCart = req.params.id;
      const idProduct = req.body.id;
      const cart = await Cart.addProductToCart(idCart, idProduct);
      res.status(200).send({
        status: 200,
        data: cart,
        message: 'Product was added to Cart successfully',
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        messages: error.message,
      });
    }
  },
  getCartById: async (req, res) => {
    const idCard = req.params.id;
    try {
      const data = await Cart.getCardById(idCard);
      if (data) {
        res.status(200).send({
          status: 200,
          data,
          message: 'Card was obtained successfully',
        });
      } else {
        res.status(404).send({
          status: 404,
          message: 'Card was not founded',
        });
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        messages: error.message,
      });
    }
  },
  deleteCartById: async (req, res) => {
    const idCart = req.params.id;
    try {
      await Cart.deleteCartById(idCart);
      res.status(200).send({
        status: 200,
        data: {
          id: idCart,
        },
        message: 'Cart deleted successfully',
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        messages: error.message,
      });
    }
  },
  deleteProductCart: async (req, res) => {
    try {
      if (!req.params.id) {
        throw Error('You should add a product');
      }
      if (!req.params.idProd) {
        throw Error('You should choose a cart');
      }
      const idCart = req.params.id;
      const idProduct = req.params.idProd;
      await Cart.deleteProductCart(idCart, idProduct);
      res.status(200).send({
        status: 200,
        message: 'Product deleted from cart successfully',
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        messages: error.message,
      });
    }
  },
};
