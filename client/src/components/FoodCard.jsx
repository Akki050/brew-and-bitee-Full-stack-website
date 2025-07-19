import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const FoodCard = ({ name, image, price, description }) => {
  const { dispatch } = useGlobalContext();
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover border-b border-gray-200"
      />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold text-orange-600">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <p className="text-md font-bold text-gray-800 mt-2">₹{price}</p>
        {/* OLD: <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-1 rounded transition">
          Add to Cart
        </button> */}
        {/* NEW: Add to Cart button dispatches action */}
        <button
          className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-1 rounded transition"
          onClick={() => {
            dispatch({ type: 'ADD_TO_CART', payload: { name, image, price, description } });
            alert(`${name} added to cart!`);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
