const User = require('../models/User');
const Order = require('../models/Order');
const Item = require('../models/Items');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password');
    res.json({ users });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('items.item').sort({ createdAt: -1 });
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

// Get analytics: total income, orders per day, popular items
exports.getAnalytics = async (req, res) => {
  try {
    // Total income
    const orders = await Order.find();
    const totalIncome = orders.reduce((sum, o) => sum + o.total, 0);
    // Orders per day
    const ordersPerDay = {};
    orders.forEach(order => {
      const day = order.createdAt.toISOString().slice(0, 10);
      ordersPerDay[day] = (ordersPerDay[day] || 0) + 1;
    });
    // Popular items
    const itemCounts = {};
    orders.forEach(order => {
      order.items.forEach(oi => {
        const id = oi.item.toString();
        itemCounts[id] = (itemCounts[id] || 0) + oi.quantity;
      });
    });
    // Get item details for popular items
    const items = await Item.find({ _id: { $in: Object.keys(itemCounts) } });
    const popularItems = items.map(item => ({
      item,
      count: itemCounts[item._id.toString()] || 0
    })).sort((a, b) => b.count - a.count);
    res.json({ totalIncome, ordersPerDay, popularItems });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
}; 