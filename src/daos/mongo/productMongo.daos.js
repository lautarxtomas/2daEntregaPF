const mongoose = require('mongoose');
const connectMongoDb = require('../config/mongo');
const schemaProducts = require('../../models/schemaProducts');

class Product {
  async connectDb() {
    return await connectMongoDb();
  }

  async save(product) {
    try {
      if (!product || typeof product !== 'object') {
        throw Error('You should add an object');
      }
      if (Object.keys(product).length === 0) {
        throw Error("You can't add an empty object");
      }
      await this.connectDb();
      const data = await schemaProducts.create({ ...product, timestamp: Date.now() });
      mongoose.disconnect();
      return data;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getById(id) {
    try {
      if (!id || typeof id !== 'string') {
        throw Error('Bad Request');
      }
      await this.connectDb();
      const product = await schemaProducts.findById(id);
      mongoose.disconnect();
      return product;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async updateById(id, newProduct) {
    try {
      if (!id || typeof id !== 'string') {
        throw Error('Bad Request');
      }
      await this.connectDb();
      await schemaProducts.findByIdAndUpdate(id, newProduct);
      mongoose.disconnect();
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getAll() {
    try {
      await this.connectDb();
      const products = await schemaProducts.find({});
      mongoose.disconnect();
      return products;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async deleteById(id) {
    try {
      if (!id || typeof id !== 'string') {
        throw Error('Bad request');
      }
      await this.connectDb();
      await schemaProducts.findByIdAndRemove(id);
      mongoose.disconnect();
    } catch (error) {
      throw Error(error.message);
    }
  }
}

module.exports = Product;
