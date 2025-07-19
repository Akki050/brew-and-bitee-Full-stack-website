// src/pages/Cart.jsx
import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { state, dispatch } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-orange-700 mb-8">Your Cart</h1>

      {state.cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* OLD: <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"> */}
          {/* NEW: Responsive grid for cart items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {state.cart.map((item, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-4">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded mb-4" />
                <h2 className="text-xl font-semibold text-orange-700">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="font-bold mt-2">₹{item.price}</p>
                <div className="mt-6">
                  <button
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded transition"
                    onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* NEW: Total Amount Section */}
          <div className="max-w-6xl mx-auto mt-8 flex justify-end">
            <div className="bg-orange-100 rounded-lg shadow p-6 w-full md:w-1/3 text-right">
              <h2 className="text-2xl font-bold text-orange-700 mb-2">Total Amount</h2>
              {/* Calculate total using reduce */}
              <p className="text-3xl font-extrabold text-green-700">
                ₹{state.cart.reduce((sum, item) => sum + (item.price || 0), 0)}
              </p>
              <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-lg shadow transition"
                // OLD: onClick does nothing
                // NEW: Redirect based on authentication
                onClick={() => {
                  if (state.isAuthenticated) {
                    navigate('/billing');
                  } else {
                    navigate('/login', { state: { from: '/billing' } });
                  }
                }}
              >
                Proceed to Billing
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
