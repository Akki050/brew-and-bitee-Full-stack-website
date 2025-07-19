import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#ffe8cc' }}>
      {/* Logo or Brand Name */}
      <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#cc5500' }}>
        Brew & Bitee ☕
      </Link>

      {/* Navigation Links */}
      <Link to="/">Home</Link>
      <Link to="/items">Items</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
};

export default NavBar;
