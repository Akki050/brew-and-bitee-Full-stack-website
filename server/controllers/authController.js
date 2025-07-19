const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

// Helper: Validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// Helper: Validate password strength (min 6 chars, at least 1 letter & 1 number)
function isStrongPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Input validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required.' });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }
    if (!isStrongPassword(password)) {
      return res.status(400).json({ message: 'Password must be at least 6 characters, include at least one letter and one number.' });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed });
    await user.save();

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });
    // Never return password
    const userData = { _id: user._id, name: user.name, email: user.email, createdAt: user.createdAt };
    res.json({ user: userData, token });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });
    // Never return password
    const userData = { _id: user._id, name: user.name, email: user.email, createdAt: user.createdAt };
    res.json({ user: userData, token });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};
