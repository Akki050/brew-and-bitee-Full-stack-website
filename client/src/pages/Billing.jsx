import React from 'react';
import { useNavigate } from 'react-router-dom';

const Billing = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white shadow-xl rounded-xl p-8 text-center max-w-md w-full mx-4">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h1>
            <p className="text-lg text-gray-700 mb-6">
              Thank you for your order. Your billing is complete and your order is being processed.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-green-800">
                You will receive an email confirmation shortly with your order details.
              </p>
            </div>
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing; 