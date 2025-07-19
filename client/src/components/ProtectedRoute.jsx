import React from 'react';
import { Navigate } from 'react-router-dom';

// Example: User is authenticated if "token" exists in localStorage
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
