const admin = require('../config/firebase-config')

class Middleware {
  async decodeToken (req, res, next) {
    const token = req.headers.authorization?.split(' ')[1]
    try /* Verifying the token and if it is valid, it will add the user to the request object. */
    // eslint-disable-next-line brace-style
    {
      const decodeValue = await admin.auth().verifyIdToken(token)
      console.log('decodeValue', decodeValue)
      if (decodeValue) {
        req.user = decodeValue
        return next()
      }
      return res.json({ message: 'Unauthorized' })
    } catch (e) {
      return res.json(e)
    }
  }
}

module.exports = new Middleware()
