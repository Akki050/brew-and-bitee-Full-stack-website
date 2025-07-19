const Wishlist = require('../models/Wishlist');
const Item = require('../models/Items');

// Get the current user's wishlist
exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id }).populate('items');
    if (!wishlist) return res.json({ items: [] });
    res.json({ items: wishlist.items });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Add an item to the wishlist
exports.addToWishlist = async (req, res) => {
  const { itemId } = req.body;
  if (!itemId) return res.status(400).json({ message: 'Item ID is required.' });
  try {
    let wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) {
      wishlist = new Wishlist({ user: req.user.id, items: [] });
    }
    const item = await Item.findById(itemId);
    if (!item) return res.status(404).json({ message: 'Item not found.' });
    if (!wishlist.items.some(i => i.equals(itemId))) {
      wishlist.items.push(itemId);
    }
    await wishlist.save();
    res.json({ items: wishlist.items });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Remove an item from the wishlist
exports.removeFromWishlist = async (req, res) => {
  const { itemId } = req.params;
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) return res.status(404).json({ message: 'Wishlist not found.' });
    wishlist.items = wishlist.items.filter(i => !i.equals(itemId));
    await wishlist.save();
    res.json({ items: wishlist.items });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Clear the wishlist
exports.clearWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) return res.status(404).json({ message: 'Wishlist not found.' });
    wishlist.items = [];
    await wishlist.save();
    res.json({ items: [] });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
}; 