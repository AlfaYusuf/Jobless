import React from 'react';
import { AuthProvider } from './AuthContext.jsx';
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <AuthProvider>
    <div>
      <Navbar/>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
    </AuthProvider>
  );
};

export default App;
