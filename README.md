# Brew & Bitee ☕

A full-stack web application for a tea and food ordering system built with React.js and Node.js.

## Features

- **User Authentication**: Login and signup functionality
- **Product Catalog**: Browse tea and food items with detailed descriptions
- **Shopping Cart**: Add items to cart and manage quantities
- **Wishlist**: Save favorite items for later
- **Order Management**: Complete checkout and billing process
- **Admin Panel**: Manage products and orders (admin functionality)
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Tailwind CSS for styling
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication

## Project Structure

```
brew-and-bitee/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Global state management
│   │   └── assets/        # Images and other assets
│   └── package.json
├── server/                # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── server.js         # Main server file
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Items
- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get item by ID
- `POST /api/items` - Create new item (admin only)
- `PUT /api/items/:id` - Update item (admin only)
- `DELETE /api/items/:id` - Delete item (admin only)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `DELETE /api/cart/:itemId` - Remove item from cart

### Wishlist
- `GET /api/wishlist` - Get user's wishlist
- `POST /api/wishlist/add` - Add item to wishlist
- `DELETE /api/wishlist/:itemId` - Remove item from wishlist

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user's orders

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

**Churukanti Akshitha Reddy**

---

Made with ❤️ for tea and food lovers! 