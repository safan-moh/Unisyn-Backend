const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

// Middleware to verify the Bearer token
const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    console.log('Received token:', token);
  
    if (!token) {
      return res.status(401).json({ error: 'Token not provided' });
    }
  
    try {
      // Verify the token using Auth0's JSON Web Key Set (JWKS) endpoint
      const jwksUrl = 'https://dev-tnugf53zwegbmm3m.us.auth0.com/.well-known/jwks.json';
      const jwksResponse = await axios.get(jwksUrl);
      const jwks = jwksResponse.data.keys;
  
      const decodedToken = jwt.decode(token, { complete: true });
  
      if (!decodedToken || !decodedToken.header || !decodedToken.header.kid) {
        return res.status(401).json({ error: 'Invalid token format' });
      }
  
      const kid = decodedToken.header.kid;
      const jwk = jwks.find((key) => key.kid === kid);
  
      if (!jwk) {
        return res.status(401).json({ error: 'Invalid token' });
      }
  
      const publicKey = {
        kty: jwk.kty,
        kid: jwk.kid,
        use: jwk.use,
        n: jwk.n,
        e: jwk.e,
      };
  
      // Verify the token's signature
      jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
        if (err) {
          return res.status(401).json({ error: 'Invalid token signature' });
        }
  
        // Token is valid, proceed with the next middleware or route handler
        req.user = decoded;
        next();
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

// Example protected route
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: 'You have access to this protected resource', user: req.user });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
