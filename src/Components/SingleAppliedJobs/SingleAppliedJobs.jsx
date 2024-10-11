import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleAppliedJobs = ({ singleJob }) => {
    debugger
    console.log(singleJob);
    const { company_logo, Contact, JobTitle, RemoteOrOnsite, Location, Salary } = singleJob;
    return (
        <div className='md:flex w-80 md:w-3/5 mx-auto border-2 rounded-3xl justify-between items-center p-4 bg-slate-200 mb-4'>
            <div className='md:flex gap-4 items-center'>
                <div className="image p-2">
                    <img src={company_logo} className='w-36'
                        alt="" srcset="" />
                </div>
                <div className="details text-start">
                    <h1 className='text-lg font-bold'>{JobTitle}</h1>
                    <p className='mb-2'>{Contact}</p>
                    <button className='border-2 px-6 py-1 bg-white rounded-lg mb-4'>{RemoteOrOnsite}</button>
                    <div className='md:flex'>
                        <p className='flex items-center mr-6'>
                            <MapPinIcon className="h-6 w-6 text-blue-500" />
                            {Location}</p>
                        <p className='flex items-center mt-2 md:mt-0'>
                            <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                            Salary : {Salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/details/${singleJob._id}`} className='custom-btn mt-4 w-full '>
                    View Details
                </Link>
                {/* <a href='http://www.accenture.com/in-en/careers/jobdetails'>View Details</a> */}
            </div>
        </div>
    );
};

export default SingleAppliedJobs;