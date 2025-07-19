const mongoose = require('mongoose');
require('dotenv').config();
const Item = require('./models/Item');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Item.deleteMany();

    await Item.insertMany([
      {
        name: 'Spicy Paneer Pizza',
        price: 249,
        image: 'https://via.placeholder.com/200',
        description: 'Delicious pizza topped with spicy paneer and veggies.',
      },
      {
        name: 'Cold Coffee',
        price: 99,
        image: 'https://via.placeholder.com/200',
        description: 'Chilled coffee with a smooth texture and perfect sweetness.',
      },
    ]);

    console.log('✅ Sample items inserted');
    mongoose.disconnect();
  })
  .catch(err => console.log(err));
