const firestore = require('../config/firebase').firebaseDb;
const admin = require('../config/firebase').admin;

class Cart {
  async createCart() {
    try {
      const cart = {
        products: [],
        timestamp: Date.now(),
      };
      const data = await firestore.collection('carts').add(cart);
      return {
        _id: data.id,
        ...cart,
      };
    } catch (error) {
      throw Error(error.message);
    }
  }

  async addProductToCart(idCart, idProduct) {
    try {
      const cart = await firestore.collection('carts').doc(idCart).get();
      const product = await firestore.collection('products').doc(idProduct).get();
      if (cart.exists && product.exists) {
        await firestore
          .collection('carts')
          .doc(idCart)
          .update({
            products:
              admin.firestore.FieldValue.arrayUnion(idProduct),
          });
        return;
      }
      throw Error('Cart or Product does not exists');
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getCardById(id) {
    try {
      if (!id || typeof id !== 'string') {
        throw Error('Bad Request');
      }
      const cart = await firestore.collection('carts').doc(id).get();
      if (cart.exists) {
        return {
          _id: id,
          ...cart.data(),
        };
      }
    } catch (error) {
      throw Error(error.message);
    }
  }
  async deleteCartById(id) {
    try {
      if (!id || typeof id !== 'string') {
        throw Error('Bad request');
      }
      await firestore.collection('carts').doc(id).delete();
    } catch (error) {
      throw Error(error.message);
    }
  }
  async deleteProductCart(idCart, idProduct) {
    try {
      const cart = await firestore.collection('carts').doc(idCart).get();
      const product = await firestore
        .collection('products')
        .doc(idProduct)
        .get();
      if (cart.exists && product.exists) {
        await firestore
          .collection('carts')
          .doc(idCart)
          .update({
            products: admin.firestore.FieldValue.arrayRemove(idProduct),
          });
        return;
      }
      throw Error('Bad request');
    } catch (error) {
      throw Error(error.message);
    }
  }
}

module.exports = Cart;