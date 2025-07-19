const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const wishlistController = require('../controllers/wishlistController');

router.use(auth);

router.get('/', wishlistController.getWishlist);
router.post('/', wishlistController.addToWishlist);
router.delete('/:itemId', wishlistController.removeFromWishlist);
router.delete('/', wishlistController.clearWishlist);

module.exports = router;
