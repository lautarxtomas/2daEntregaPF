const firestore = require('../config/firebase').firebaseDb;

class Product {
  async save(product) {
    try {
      if (!product || typeof product !== 'object') {
        throw Error('You should add an object');
      }
      if (Object.keys(product).length === 0) {
        throw Error("You can't add an empty object");
      }
      const data = await firestore.collection('products').add({
        ...product,
        timestamp: Date.now(),
      });
      return { _id: data.id, product };
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getById(id) {
    try {
      if (!id || typeof id !== 'string') {
        throw Error('Bad Request');
      }
      const product = await firestore.collection('products').doc(id).get();
      return {
        _id: id,
        ...product.data(),
      };
    } catch (error) {
      throw Error(error.message);
    }
  }

  async updateById(id, newProduct) {
    try {
      if (!id || typeof id !== 'string') {
        throw Error('Bad Request');
      }
      await firestore.collection('products').doc(id).update(newProduct);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getAll() {
    try {
      const data = [];
      const products = await firestore.collection('products').get();
      products.forEach((doc) => {
        data.push(doc.data());
      });
      return data;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async deleteById(id) {
    try {
      if (!id || typeof id !== 'string') {
        throw Error('Bad request');
      }
      await firestore.collection('products').doc(id).delete();
    } catch (error) {
      throw Error(error.message);
    }
  }
}

module.exports = Product;
