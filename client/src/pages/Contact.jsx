import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center py-12 px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-orange-700 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          We’d love to hear from you! Reach out to us directly:
        </p>
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-orange-700 mb-1">churukanti akshitha reddy</h3>
            <a href="tel:8341785897" className="text-lg text-orange-600 underline">8341785897</a>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-orange-700 mb-1">lahari</h3>
            <a href="tel:8309182591" className="text-lg text-orange-600 underline">8309182591</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 