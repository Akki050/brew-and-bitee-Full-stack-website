// src/pages/Home.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // NEW: Use only 3 featured items
  const featuredItems = [
    { id: 1, name: 'Black Tea', image: '/images/Black-Tea.jpg', description: 'Strong and flavorful traditional black tea.', price: 99 },
    { id: 2, name: 'Mocha', image: '/images/istockphoto-1071666266-612x612.jpg', description: 'Smooth mocha with rich chocolate flavor.', price: 159 },
    { id: 3, name: 'Espresso', image: '/images/istockphoto-1193759286-612x612.jpg', description: 'Classic strong espresso shot.', price: 89 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 flex flex-col items-center">
      
      {/* Main Content */}
      <main className="pt-28 w-full text-center px-4">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-orange-700 mb-4 tracking-wide"
          data-aos="fade-down"
        >
          WELCOME <br></br>WE OFFER EVERYTHING
        </h1>

        {/* Welcome Paragraph */}
        <p
          className="text-gray-700 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          Welcome to <span className="font-semibold text-orange-600">Brew and Bitee</span> — 
          your happy place for refreshing drinks and flavorful treats. Whether you're looking to sip a bold coffee,
          enjoy a creamy latte, or grab a quick bite with friends, we’ve got something fresh waiting just for you!
        </p>

        {/* Drinks Row */}
        {/* OLD: <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mb-20"> */}
        {/* NEW: Featured Items Grid (same as Items page) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/items/${item.id}`)}
              className="w-full h-72 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-500 border border-black overflow-hidden cursor-pointer flex flex-col"
              data-aos="zoom-in"
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t mb-2" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-orange-700">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{item.description}</p>
                <span className="font-bold text-green-700">₹{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* About Us Section */}
        <div
          className="bg-white py-10 px-6 rounded-lg shadow-inner max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-orange-600 mb-4">About Us</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            At <strong>Brew and Bitee</strong>, we craft more than just beverages — we create moments.
            Our passion lies in combining tradition with innovation, offering premium-quality drinks and snacks in a
            cozy and vibrant space. Whether you're working, catching up, or simply chilling, you're always welcome here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
