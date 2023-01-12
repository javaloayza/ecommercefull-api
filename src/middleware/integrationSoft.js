const admin = require('../config/firebase-config')

class IntegrationSoft {
  async decodeSoft (req, res, next) {
    try/* A middleware that is used to decode the token that is sent from the client side. */
    // eslint-disable-next-line brace-style
    {
      const token = req.headers.authorization?.split(' ')[1]
      if (token) {
        const decodeValue = await admin.auth().verifyIdToken(token)
        if (decodeValue) {
          req.user = decodeValue
        }
      }
      return next()
    } catch (error) {
      return res.json(error)
    }
  }
}

module.exports = new IntegrationSoft()
