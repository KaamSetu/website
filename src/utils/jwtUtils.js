import jwt from 'jsonwebtoken';

// Generate JWT token
export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Verify JWT token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw new Error('Invalid token');
  }
};