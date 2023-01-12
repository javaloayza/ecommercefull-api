const admin = require('firebase-admin')
require('dotenv').config()

/* Importing the service account credentials from the serviceAccount.json file. */
// const serviceAccount = require('./serviceAccount1.json')

/* Initializing the firebase app with the service account credentials. */
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
  })
})

module.exports = admin

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// })

// module.exports = admin
