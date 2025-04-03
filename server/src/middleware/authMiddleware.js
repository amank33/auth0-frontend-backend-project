const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const dotenv = require("dotenv");

dotenv.config();

// Create a JWKS client to fetch Auth0 public keys
const client = jwksClient({
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

//  Fetches the signing key from Auth0's JWKS endpoint.
 
const getSigningKey = async (header) => {
  try {
    const key = await client.getSigningKey(header.kid);
    return key.publicKey || key.rsaPublicKey;
  } catch (error) {
    console.error("Error fetching signing key:", error.message);
    throw new Error("Failed to retrieve signing key");
  }
};

//  Middleware to verify JWT token from the Authorization header.

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(400).json({ message: "Token is required to access this page" });
    }

    // Decode JWT header to extract key ID (kid)
    const decodedHeader = jwt.decode(token, { complete: true });
    if (!decodedHeader || !decodedHeader.header) {
      return res.status(400).json({ message: "Invalid token structure" });
    }

    // Get the public signing key from Auth0
    const signingKey = await getSigningKey(decodedHeader.header);

    // Verify the JWT token
    const decoded = jwt.verify(token, signingKey, {
      audience: process.env.AUTH0_AUDIENCE,
      issuer: `https://${process.env.AUTH0_DOMAIN}/`,
      algorithms: ["RS256"],
    });

    req.user = decoded;
    console.log("User authenticated successfully:", req.user);
    next();
  } catch (err) {
    console.error("JWT Verification Error:", err.message);
    return res.status(401).json({ message: "Invalid token access", error: err.message });
  }
};

module.exports = { verifyToken };
