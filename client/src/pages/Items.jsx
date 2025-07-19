// src/pages/Items.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const items = [
  { id: 1, image: '/images/Black-Tea.jpg' },
  { id: 2, image: '/images/istockphoto-1071666266-612x612.jpg' },
  { id: 3, image: '/images/istockphoto-1193759286-612x612.jpg' },
  { id: 4, image: '/images/istockphoto-1255038110-612x612.jpg' },
  { id: 5, image: '/images/istockphoto-1258017980-612x612.jpg' },
  { id: 6, image: '/images/istockphoto-1281279516-612x612.webp' },
  { id: 7, image: '/images/istockphoto-1282689251-612x612.jpg' },
  { id: 8, image: '/images/istockphoto-1319948742-612x612.jpg' },
  { id: 9, image: '/images/istockphoto-1326945333-612x612.jpg' },
  { id: 10, image: '/images/istockphoto-1334833946-612x612.webp' },
  { id: 11, image: '/images/istockphoto-1351526325-612x612.jpg' },
  { id: 12, image: '/images/istockphoto-1386525531-612x612.jpg' },
  { id: 13, image: '/images/istockphoto-1441450534-612x612.jpg' },
  { id: 14, image: '/images/istockphoto-2175668080-612x612.jpg' },
  { id: 15, image: '/images/istockphoto-2181353098-612x612.jpg' },
  { id: 16, image: '/images/istockphoto-2211312751-612x612.jpg' },
  { id: 17, image: '/images/istockphoto-2211312770-612x612.jpg' },
  { id: 18, image: '/images/lemon-tea.jpg' },
  { id: 19, image: '/images/Masala-chai.jpg' },
];

const Items = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-orange-50 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-orange-700 mb-10 text-center" data-aos="fade-down">
        Our Delicious Collection 🍵
      </h1>
      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/items/${item.id}`)}
            // OLD: className="w-60 h-72 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-500 border border-black overflow-hidden cursor-pointer"
            // NEW: Use responsive grid item classes
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-72 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-500 border border-black overflow-hidden cursor-pointer"
            data-aos="zoom-in"
          >
            <img src={item.image} alt={`item-${item.id}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;