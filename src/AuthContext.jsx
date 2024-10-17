import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// AuthProvider to wrap the app and provide authentication state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize auth status on load
  useEffect(() => {
    // debugger
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  // Function to handle login
  const login = () => {
    // debugger
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
 
  };

  // Function to handle logout
  const logout = () => {
    // debugger
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
}
