import React from 'react';
import CareerHub from '../../assets/All Images/CareerHub.png'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='m-4'>
            <div className="navbar bg-base-100 p-4 ">
                <div className="navbar-start" style={{width:'41%'}}>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li>
                                <Link to="/" className='default '>
                                    Home
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/statistic" className='default'>
                                    Statistic
                                </Link>
                            </li> */}
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
                            {/* <li>
                                <Link to="/blog" className='default'>
                                    Blog
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <Link to="/" className='normal-case text-5xl text-blue-800 font-bold whitespace-nowrap'>Job<span className="text-red-500"> ̷L̷e̷s̷s̷</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 tracking-wider font-medium">
                        <li>
                            <Link to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
                                Home
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/statistic" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
                                Statistic
                            </Link>
                        </li> */}
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
                        {/* <li>
                            <Link to="/blog" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
                                Blog
                            </Link>
                        </li> */}
                    </ul>
                </div>
                
            </div>
            <div  style={{display:'flex',justifyContent:'center',marginLeft:'50px'}}>
                    {/* <a className="custom-btn">Start Applying</a> */}
                    {/* <Link to='/' className='custom-btn'>Start Applying</Link> */}

                    <div>
                        {/* <p className='text-2xl custom-text'><b>Follow us On <span className=' text-red-500'> For Job's</span></b></p> */}
                        {/* <img src={CareerHub} alt="" srcset="" /> */}


                        <ul className="flex flex-row gap-6 mt-4 justify-center md:justify-start ">
                            <li>
                                <a href="https://www.facebook.com/share/g/YC8aPwAravvhQkR3/?mibextid=A7sQZp" target="_blank">
                                    <svg
                                        class="text-blue-700 w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>

                                <a href="https://www.instagram.com/jobless.94?igsh=MTNuMWl1ZmhvYmhjaA==" target="_blank">
                                    <svg
                                        class="text-pink-600 w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                               {} <a href="https://www.linkedin.com/groups/14520356 " target="_blank">
                                    <svg
                                        class="text-blue-600 w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M22.23 0H1.77C.79 0 0 .77 0 1.75v20.5C0 23.23.79 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.75V1.75C24 .77 23.2 0 22.23 0zM7.06 20.45H3.69V9h3.37v11.45zM5.38 7.47a1.95 1.95 0 110-3.9 1.95 1.95 0 010 3.9zm15.07 12.98h-3.37V14.8c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.46-2.17 2.96v5.75h-3.37V9h3.23v1.56h.04c.45-.85 1.55-1.76 3.2-1.76 3.42 0 4.05 2.25 4.05 5.17v6.48z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me" target="_blank">
                                    <svg
                                        class="text-green-500 w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M17.472 14.382c-.297-.149-1.757-.867-2.03-.967-.273-.099-.472-.149-.67.15-.198.297-.767.966-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.476-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.46.13-.609.134-.134.297-.347.446-.52.149-.174.198-.298.298-.496.099-.198.05-.371-.025-.52-.074-.149-.67-1.612-.916-2.204-.242-.581-.487-.502-.67-.512l-.571-.012c-.198 0-.52.075-.792.372s-1.04 1.015-1.04 2.478 1.065 2.876 1.214 3.075c.149.198 2.098 3.202 5.078 4.487.71.307 1.262.49 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.757-.718 2.005-1.413.248-.695.248-1.29.173-1.414-.075-.124-.273-.198-.571-.347zM12.006 0c-6.626 0-12 5.373-12 12 0 2.118.552 4.09 1.514 5.818L0 24l6.293-1.653c1.666.915 3.569 1.453 5.707 1.453 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 22.059c-1.755 0-3.407-.481-4.825-1.317l-.347-.208-3.736.981.998-3.64-.225-.373c-.881-1.46-1.39-3.155-1.39-4.942 0-5.455 4.436-9.891 9.891-9.891 2.641 0 5.12 1.028 6.987 2.896s2.896 4.346 2.896 6.987c0 5.455-4.436 9.891-9.891 9.891z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@jobless94?si=vlIPFMsdSr3DpVH4" target="_blank">
                                    <svg
                                        class="text-red-600 w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M19.615 3.184a2.733 2.733 0 00-1.922-1.922C15.541.25 12.72.25 12.72.25h-.001c-2.024 0-4.061.162-6.065.5A2.733 2.733 0 004.45 3.184C2.318 5.317 2.318 8.683 2.318 12c0 3.317 0 6.683 2.132 8.816a2.733 2.733 0 001.922 1.922c2.004.338 4.041.5 6.065.5h.001c2.024 0 4.061-.162 6.065-.5a2.733 2.733 0 001.922-1.922C21.682 18.683 21.682 15.317 21.682 12c0-3.317 0-6.683-2.132-8.816zM10 15.5v-7l5 3.5-5 3.5z"
                                        />
                                    </svg>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;