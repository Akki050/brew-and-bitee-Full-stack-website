import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useGlobalContext();

  // NEW: Handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup (replace with real auth later)
    dispatch({ type: 'LOGIN' });
    navigate(location.state?.from || '/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">Sign Up for Brew and Bitee</h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block text-left text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-left text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-left text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-700 underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
