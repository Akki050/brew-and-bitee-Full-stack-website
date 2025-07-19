const Cart = require('../models/Cart');
const Item = require('../models/Items');

// Get the current user's cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.item');
    if (!cart) return res.json({ items: [] });
    res.json({ items: cart.items });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Add an item to the cart
exports.addToCart = async (req, res) => {
  const { itemId, quantity = 1 } = req.body;
  if (!itemId) return res.status(400).json({ message: 'Item ID is required.' });
  try {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }
    const item = await Item.findById(itemId);
    if (!item) return res.status(404).json({ message: 'Item not found.' });
    const existing = cart.items.find(i => i.item.equals(itemId));
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.items.push({ item: itemId, quantity });
    }
    await cart.save();
    res.json({ items: cart.items });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Remove an item from the cart
exports.removeFromCart = async (req, res) => {
  const { itemId } = req.params;
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found.' });
    cart.items = cart.items.filter(i => !i.item.equals(itemId));
    await cart.save();
    res.json({ items: cart.items });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Clear the cart
exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found.' });
    cart.items = [];
    await cart.save();
    res.json({ items: [] });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};
