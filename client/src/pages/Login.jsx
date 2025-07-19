import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useGlobalContext();

  // NEW: Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login (replace with real auth later)
    dispatch({ type: 'LOGIN' });
    navigate(location.state?.from || '/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">Login to Brew and Bitee</h2>
        <form onSubmit={handleLogin} className="space-y-6">
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
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-orange-700 underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
