const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  quantity: { type: Number, required: true, min: 1 },
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  total: { type: Number, required: true },
  address: { type: String, required: true },
  status: { type: String, default: 'Placed', enum: ['Placed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'] },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema); 