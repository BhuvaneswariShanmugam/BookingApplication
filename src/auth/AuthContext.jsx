import React, { createContext, useState, useEffect, useContext } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  // Function to get the userId from token
  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token'); // Retrieve the JWT from localStorage
    if (token) {
      const decodedToken = jwt_decode(token);
      return decodedToken.userId;  // Assuming the userId is in the token's payload
    }
    return null;
  };

  // Set userId when the component mounts or token changes
  useEffect(() => {
    const id = getUserIdFromToken();
    setUserId(id);
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    const decodedToken = jwt_decode(token);
    setUserId(decodedToken.userId);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
