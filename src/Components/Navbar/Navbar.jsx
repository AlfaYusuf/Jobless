import React, { useEffect, useState } from 'react';
import CareerHub from '../../assets/All Images/CareerHub.png';
import { useAuth } from '../../AuthContext';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isAuthenticated, logout } = useAuth(); // Access isAuthenticated and logout from context
  const navigate = useNavigate();

  const handleLogout = () => {
    // debugger
    logout(); // Update global authentication state
    // Clear authentication data and update state
    // localStorage.removeItem('isAuthenticated');
    // setIsAuthenticated(false);
    navigate('/'); // Redirect to Login page
  };

  return (
    <div className='m-4'>
      <div className="navbar bg-base-100 p-4">
        <div className="navbar-start" style={{ width: '41%' }}>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/" className='default'>
                  Home
                </Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link to="/form" className="default">Form</Link>
                </li>
              )}
              {/* <li>
                <Link to="/appliedjobs" className='default'>
                  Applied Jobs
                </Link>
              </li> */}
              {!isAuthenticated ? (
                <li>
                  <Link to="/Login" className='default'>
                    Login
                  </Link>
                </li>
              ) : (
                <li>
                  <button onClick={handleLogout} className='default'>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
          <Link to="/" className='normal-case text-5xl text-blue-800 font-bold whitespace-nowrap'>
            Job<span className="text-red-500"> Less</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 tracking-wider font-medium">
            <li>
              <Link to="/" className='default'>
                Home
              </Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/form" className="default">Form</Link>
              </li>
            )}
            {/* <li>
              <Link to="/appliedjobs" className='default'>
                Applied Jobs
              </Link>
            </li> */}
            {!isAuthenticated ? (
              <li>
                <Link to="/Login" className='default'>
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <button onClick={handleLogout} className='default'>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
