const connect = require('mongoose').connect;

const uri =
  'mongodb+srv://lautarxtomas:lautaro123@cluster0.xpais9l.mongodb.net/ecommerce?retryWrites=true&w=majority';

async function connectMongoDb() {
  try {
    const client = await connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Db connectect to', client.connection.name);
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectMongoDb;