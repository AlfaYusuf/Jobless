import React from 'react';
import CareerHub from '../../assets/All Images/CareerHub.png'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
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
          <li>
            <Link to="/appliedjobs" className='default'>
              Applied Jobs
            </Link>
          </li>
          <li>
            <Link to="/Login" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
              Login
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/" className='normal-case text-5xl text-blue-800 font-bold whitespace-nowrap'>
        Job<span className="text-red-500"> Less</span>
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 tracking-wider font-medium">
        <li>
          <Link to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/appliedjobs" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
            Applied Jobs
          </Link>
        </li>
        <li>
          <Link to="/Login" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  </div>

  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <ul className="flex flex-row gap-6 mt-4 justify-center md:justify-start">
      <li>
        <a href="https://www.facebook.com/share/g/YC8aPwAravvhQkR3/?mibextid=A7sQZp" target="_blank" aria-label="Facebook">
          <svg className="text-blue-700 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/jobless.94?igsh=MTNuMWl1ZmhvYmhjaA==" target="_blank" aria-label="Instagram">
          <svg className="text-pink-600 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.1 3.1 0 00-.748-1.15 3.1 3.1 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zm0 3.528a4.674 4.674 0 100 9.348 4.674 4.674 0 000-9.348zm0 7.705a3.032 3.032 0 110-6.063 3.032 3.032 0 010 6.063zm4.843-7.754a1.12 1.12 0 100-2.24 1.12 1.12 0 000 2.24z" clipRule="evenodd" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/madhura-bhange-296420237" target="_blank" aria-label="LinkedIn">
          <svg className="text-blue-500 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0zm-.846 17.346h-2.56V9.503h2.56v7.843zM9.186 8.245a1.296 1.296 0 110-2.592 1.296 1.296 0 010 2.592zm10.065 9.101h-2.56v-3.985c0-2.257-2.608-2.086-2.608 0v3.985h-2.56V9.503h2.56v1.055c1.122-2.073 5.168-2.238 5.168 1.998v5.79z" clipRule="evenodd" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://wa.link/0imwfv" target="_blank" aria-label="WhatsApp">
          <svg className="text-green-600 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.47-.148-.668.149-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.787-1.48-1.758-1.655-2.056-.173-.297-.018-.458.13-.607.133-.132.297-.347.446-.521.15-.173.198-.297.297-.495.1-.198.05-.372-.025-.521-.075-.148-.668-1.612-.916-2.208-.242-.579-.487-.5-.668-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.793.372-.273.297-1.04 1.014-1.04 2.475s1.065 2.869 1.213 3.074c.149.198 2.1 3.21 5.1 4.498.714.307 1.272.49 1.707.628.718.229 1.372.197 1.89.12.576-.085 1.758-.718 2.005-1.412.248-.694.248-1.288.173-1.412-.075-.125-.273-.198-.571-.347zM12 2C6.477 2 2 6.477 2 12c0 1.982.577 3.83 1.567 5.377L2 22l4.66-1.563A9.963 9.963 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</div>

    );
};

export default Navbar;