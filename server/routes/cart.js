const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const cartController = require('../controllers/cartController');

router.use(auth);

router.get('/', cartController.getCart);
router.post('/', cartController.addToCart);
router.delete('/:itemId', cartController.removeFromCart);
router.delete('/', cartController.clearCart);

module.exports = router;
