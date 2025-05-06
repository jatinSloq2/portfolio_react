// Import necessary libraries
import React from 'react';
import { Navigate } from 'react-router-dom';

// PrivateRoute component for handling protected routes
const PrivateRoute = ({ children }) => {
  // Get the token from localStorage to check user authentication
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

// Export the PrivateRoute component for use in other parts of the application
export default PrivateRoute;
