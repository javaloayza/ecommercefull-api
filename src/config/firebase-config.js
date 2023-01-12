const admin = require('firebase-admin')

/* Importing the service account credentials from the serviceAccount.json file. */
const serviceAccount = require('./serviceAccount1.json')

/* Initializing the firebase app with the service account credentials. */
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

module.exports = admin
