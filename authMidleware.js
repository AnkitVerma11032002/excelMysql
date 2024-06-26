const { verifyToken } = require('./uitls/jwt'); // Import the token verification function

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.trim().startsWith('Bearer ')) {
    console.log('No token provided or invalid Authorization header format');
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  const token = authHeader.trim().split(' ')[1];
  
  try {
    const decoded = verifyToken(token);
    console.log('Decoded Token:', decoded); // Log the decoded token
    req.user = decoded;
    next();
  } catch (error) {
    console.log('Invalid token:', error.message);
    res.status(403).json({ error: 'Invalid token.' });
  }
};

module.exports = authenticateToken;
