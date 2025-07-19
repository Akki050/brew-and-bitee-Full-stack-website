import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-orange-700 mb-4">About Brew and Bitee</h1>
        {/* NEW: Personal Info Section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/images/WhatsApp Image 2025-07-17 at 22.15.46_084d5427.jpg"
            alt="churukanti akshitha reddy"
            className="w-32 h-32 rounded-full object-cover border-4 border-orange-300 shadow mb-3"
          />
          <h3 className="text-xl font-bold text-orange-700">churukanti akshitha reddy</h3>
          <p className="text-gray-700">Phone: <a href="tel:8341785897" className="text-orange-600 underline">8341785897</a></p>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <span className="font-semibold text-orange-600">Brew and Bitee</span> — your happy place for refreshing drinks and flavorful treats!<br/>
          Our journey began with a simple idea: to create a cozy, vibrant space where everyone can enjoy premium-quality beverages and snacks, whether you’re working, catching up, or just chilling.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">Our Story</h2>
          <p className="text-gray-600">
            Founded by passionate foodies and coffee lovers, Brew and Bitee blends tradition with innovation. We believe in using the freshest ingredients, supporting local producers, and crafting every cup and bite with care. Our menu is inspired by global flavors and local favorites, ensuring there’s something for everyone.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-md text-gray-700">
            <li>Quality in every sip and bite</li>
            <li>Warm, welcoming atmosphere</li>
            <li>Community and sustainability</li>
            <li>Innovation and creativity</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">Meet the Team</h2>
          <p className="text-gray-600 mb-2">We’re a small, passionate crew dedicated to making your day brighter. Want to join us or have feedback?</p>
          <a href="mailto:hello@brewandbitee.com" className="text-orange-700 underline">Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default About;
