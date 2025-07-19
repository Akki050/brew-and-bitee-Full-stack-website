const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const orderController = require('../controllers/orderController');
// Placeholder for admin check
const isAdmin = (req, res, next) => { /* TODO: Implement admin check */ next(); };

router.use(auth);

router.post('/', orderController.placeOrder);
router.get('/', orderController.getUserOrders);
router.get('/:orderId', orderController.getOrderDetails);
router.get('/all', isAdmin, orderController.getAllOrders);

module.exports = router; 