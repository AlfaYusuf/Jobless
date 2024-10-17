import React from 'react';
import "./Header.css"
import bannerImage from '../../assets/All Images/JobSearching.png'

const Header = () => {
    return (
        <div className="header-container shadow-effect">
            <div className='flex-container'>
                <div className="header-details">
                    <h3 className='header-title'>
                        <b>Let's Remove The <span className='highlight'>Tag Here</span></b>
                    </h3>
                    <p className='header-description'>Explore thousands of job opportunities with all the information you need. It's your future. Come find it. Manage all your job applications from start to finish.</p>
                </div>
                <div className="image-section">
                    <img src={bannerImage} alt="Job Searching" className='banner-image' />
                </div>
            </div>
        </div>
    );
};

export default Header;
