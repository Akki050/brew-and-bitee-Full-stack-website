// src/pages/ItemDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { useGlobalContext } from '../context/GlobalContext';

const itemsData = [
  {
    id: 1,
    name: 'Black Tea',
    image: '/images/Black-Tea.jpg',
    description: 'Strong and flavorful traditional black tea.',
    price: 99,
    rating: 4.2,
  },
  {
    id: 2,
    name: 'Mocha',
    image: '/images/istockphoto-1071666266-612x612.jpg',
    description: 'Smooth mocha with rich chocolate flavor.',
    price: 159,
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Espresso',
    image: '/images/istockphoto-1193759286-612x612.jpg',
    description: 'Classic strong espresso shot.',
    price: 89,
    rating: 4.1,
  },
  {
    id: 4,
    name: 'Americano',
    image: '/images/istockphoto-1255038110-612x612.jpg',
    description: 'Hot water mixed with rich espresso.',
    price: 109,
    rating: 4.0,
  },
  {
    id: 5,
    name: 'Latte',
    image: '/images/istockphoto-1258017980-612x612.jpg',
    description: 'Espresso with steamed milk and foam.',
    price: 149,
    rating: 4.6,
  },
  {
    id: 6,
    name: 'Cold Brew',
    image: '/images/istockphoto-1281279516-612x612.webp',
    description: 'Smooth cold brewed coffee.',
    price: 139,
    rating: 4.4,
  },
  {
    id: 7,
    name: 'Hazelnut Coffee',
    image: '/images/istockphoto-1282689251-612x612.jpg',
    description: 'Flavored hazelnut delight.',
    price: 169,
    rating: 4.3,
  },
  {
    id: 8,
    name: 'Caramel Cappuccino',
    image: '/images/istockphoto-1319948742-612x612.jpg',
    description: 'Cappuccino topped with caramel syrup.',
    price: 179,
    rating: 4.7,
  },
  {
    id: 9,
    name: 'Café au lait',
    image: '/images/istockphoto-1326945333-612x612.jpg',
    description: 'Hot coffee with steamed milk.',
    price: 119,
    rating: 4.2,
  },
  {
    id: 10,
    name: 'Vanilla Frappe',
    image: '/images/istockphoto-1334833946-612x612.webp',
    description: 'Chilled vanilla coffee delight.',
    price: 189,
    rating: 4.6,
  },
  {
    id: 11,
    name: 'Irish Coffee',
    image: '/images/istockphoto-1351526325-612x612.jpg',
    description: 'Strong blend with Irish cream.',
    price: 199,
    rating: 4.8,
  },
  {
    id: 12,
    name: 'Cream Coffee',
    image: '/images/istockphoto-1386525531-612x612.jpg',
    description: 'Milky sweetened cream coffee.',
    price: 129,
    rating: 4.4,
  },
  {
    id: 13,
    name: 'Iced Mocha',
    image: '/images/istockphoto-1441450534-612x612.jpg',
    description: 'Chilled mocha with whipped cream.',
    price: 159,
    rating: 4.5,
  },
  {
    id: 14,
    name: 'Nutty Coffee',
    image: '/images/istockphoto-2175668080-612x612.jpg',
    description: 'Nutty roast with chocolate hints.',
    price: 149,
    rating: 4.3,
  },
  {
    id: 15,
    name: 'Coconut Coffee',
    image: '/images/istockphoto-2181353098-612x612.jpg',
    description: 'Tropical coconut infused coffee.',
    price: 169,
    rating: 4.4,
  },
  {
    id: 16,
    name: 'Pumpkin Spice',
    image: '/images/istockphoto-2211312751-612x612.jpg',
    description: 'Seasonal pumpkin spice latte.',
    price: 189,
    rating: 4.6,
  },
  {
    id: 17,
    name: 'Toffee Brew',
    image: '/images/istockphoto-2211312770-612x612.jpg',
    description: 'Rich brew with toffee syrup.',
    price: 179,
    rating: 4.5,
  },
  {
    id: 18,
    name: 'Lemon Tea',
    image: '/images/lemon-tea.jpg',
    description: 'Refreshing lemon infused tea.',
    price: 89,
    rating: 4.2,
  },
  {
    id: 19,
    name: 'Masala Chai',
    image: '/images/Masala-chai.jpg',
    description: 'Traditional spiced Indian tea.',
    price: 99,
    rating: 4.7,
  },
];

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = itemsData.find((itm) => itm.id === parseInt(id));
  const { dispatch } = useGlobalContext();

  if (!item) {
    return <div className="text-center py-20 text-2xl text-red-500">Item not found 😞</div>;
  }

  // NEW: Find similar items based on taste keywords in description
  const tasteKeywords = [
    'strong', 'sweet', 'spiced', 'nutty', 'chocolate', 'cream', 'vanilla', 'hazelnut', 'caramel', 'pumpkin', 'toffee', 'lemon', 'traditional', 'tropical', 'refreshing', 'rich', 'smooth'
  ];
  // Find keywords in current item's description
  const itemTaste = tasteKeywords.find(keyword => item.description.toLowerCase().includes(keyword));
  // Find similar items (excluding current item)
  let similarItems = itemsData.filter(
    i => i.id !== item.id && itemTaste && i.description.toLowerCase().includes(itemTaste)
  );
  // If not enough, fill with random items (excluding current)
  if (similarItems.length < 3) {
    const others = itemsData.filter(i => i.id !== item.id && !similarItems.includes(i));
    while (similarItems.length < 3 && others.length > 0) {
      const idx = Math.floor(Math.random() * others.length);
      similarItems.push(others[idx]);
      others.splice(idx, 1);
    }
  }
  // Limit to 4
  similarItems = similarItems.slice(0, 4);

  return (
    <div className="min-h-screen bg-orange-50 p-10 flex flex-col items-center">
      <button
        className="text-sm text-orange-700 underline mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back to items
      </button>

      <div className="bg-white shadow-xl rounded-lg p-6 max-w-xl w-full text-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-72 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold text-orange-700 mb-2">{item.name}</h1>
        <p className="text-gray-700 text-md mb-2">{item.description}</p>
        <p className="text-lg font-bold text-gray-800">₹{item.price}</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <FaStar className="text-yellow-400" />
          <span className="text-sm text-gray-700">{item.rating} / 5</span>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2"
            onClick={() => {
              dispatch({ type: 'ADD_TO_CART', payload: item });
              alert(`${item.name} added to cart!`);
            }}
          >
            <FaShoppingCart /> Add to Cart
          </button>
          <button
            className="text-red-500 hover:text-red-600 text-2xl"
            onClick={() => {
              dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
              alert(`${item.name} added to wishlist!`);
            }}
          >
            <FaHeart />
          </button>
        </div>
      </div>
      {/* NEW: Similar Items Section */}
      {/* OLD: <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"> */}
      {/* NEW: Responsive grid for similar items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {similarItems.map(sim => (
          <div key={sim.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer" onClick={() => navigate(`/items/${sim.id}`)}>
            <img src={sim.image} alt={sim.name} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-lg font-semibold text-orange-700">{sim.name}</h3>
            <p className="text-gray-600 text-sm mb-1">{sim.description}</p>
            <span className="font-bold text-green-700">₹{sim.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetails;











