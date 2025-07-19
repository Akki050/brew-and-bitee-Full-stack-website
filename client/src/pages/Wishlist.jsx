// src/pages/Wishlist.jsx
import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const Wishlist = () => {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-orange-700 mb-8">Your Wishlist</h1>

      {state.wishlist.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {state.wishlist.map((item, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded mb-4" />
              <h2 className="text-xl font-semibold text-orange-700">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="font-bold mt-2">₹{item.price}</p>
              {/* NEW: Add to Cart button */}
              <button
                className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-1 rounded transition"
                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
              >
                Add to Cart
              </button>
              <div className="mt-4">
                <button
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded transition"
                  onClick={() => dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item.id })}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
