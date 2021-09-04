const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
require('dotenv').config()

// Create middleware to validate the JWT using express-jwt
const checkJwt = jwt({
  // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.DOMAIN}/.well-known/jwks.json`,
  }),

  // Validate the audience (Identifier) and the issuer (Domain).
  audience: `${process.env.AUDIENCE}`,
  // issuer: `https://${process.env.DOMAIN}/`,
  algorithms: ['RS256'],
})

module.exports = {
  checkJwt,
}
