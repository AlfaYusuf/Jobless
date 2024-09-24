import React from 'react';
import bannerImage from '../../assets/All Images/JobSearching.png'

const Header = () => {
    return (
        <div>
            <div className='md:flex items-center mb-12 px-4 -mt-4'>


                <div className="header-details md:w-3/5 tracking-wider ">


                    
                    <h3 className='text-blue-800 text-4xl w-auto md:w-5/6'>
                        <b>Let's Remove The  <span className=' text-red-500'>Tag Here</span></b>
                    </h3>
                    <p className='w-auto md:w-5/6 mt-6 leading-relaxed'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    {/* <button className='custom-btn text-blue-800 mt-4'>Get Started</button> */}
                </div>
                <div className="image-section md:w-1/2 mt-6">
                    <img src={bannerImage} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Header;