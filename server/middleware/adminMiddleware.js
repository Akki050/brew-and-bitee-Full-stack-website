module.exports = function (req, res, next) {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'Not authenticated.' });
  }
  // User model is required here to check isAdmin
  const User = require('../models/User');
  User.findById(req.user.id).then(user => {
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: 'Admin access required.' });
    }
    next();
  }).catch(() => res.status(500).json({ message: 'Server error.' }));
}; 