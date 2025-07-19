const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Item = require('../models/Items');
const User = require('../models/User');

// Place an order (checkout)
exports.placeOrder = async (req, res) => {
  const { address } = req.body;
  if (!address) return res.status(400).json({ message: 'Delivery address is required.' });
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.item');
    if (!cart || cart.items.length === 0) return res.status(400).json({ message: 'Cart is empty.' });
    let total = 0;
    const orderItems = cart.items.map(ci => {
      total += ci.item.price * ci.quantity;
      return { item: ci.item._id, quantity: ci.quantity };
    });
    const order = new Order({
      user: req.user.id,
      items: orderItems,
      total,
      address,
      status: 'Placed',
    });
    await order.save();
    cart.items = [];
    await cart.save();
    res.json({ message: 'Order placed successfully.', order });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Get all orders for the current user
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('items.item').sort({ createdAt: -1 });
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Get details of a specific order (user can only access their own)
exports.getOrderDetails = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findOne({ _id: orderId, user: req.user.id }).populate('items.item');
    if (!order) return res.status(404).json({ message: 'Order not found.' });
    res.json({ order });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Admin: Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('items.item').sort({ createdAt: -1 });
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
}; 