const admin = require('firebase-admin');
const serviceAccount = require('../../proyectobackend-10d04-firebase-adminsdk-u21uo-56a21bfdb4.json');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firebaseDb = firebase.firestore();

module.exports = {
  firebaseDb,
  admin
};




