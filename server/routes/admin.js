const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');
const adminController = require('../controllers/adminController');

router.use(auth, admin);

router.get('/users', adminController.getAllUsers);
router.get('/orders', adminController.getAllOrders);
router.get('/analytics', adminController.getAnalytics);

module.exports = router; 