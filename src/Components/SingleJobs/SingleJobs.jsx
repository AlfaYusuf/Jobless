import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleJobs = ({ job }) => {
    debugger
     console.log(job);
    const { company_logo, CompanyName, jobTitle, Location, RemoteOrOnsite, Salary} = job;
    return (
        <div>
            <div className='mx-auto border-2 rounded-xl items-center p-4  bg-slate-200'>
                <div className='gap-4 items-center'>
                    <div className="image p-2">
                        <img src={company_logo} className='w-36'
                            alt="" srcset="" />
                    </div>
                    <div className="details text-start p-2">
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-lg font-bold'>{jobTitle}</h1>
                                {/* <h1 className='text-lg font-bold'>Drug safety Associate</h1> */}
                                <p className='mb-2'>{CompanyName}</p>
                                {/* <p className='mb-2'>TCS</p> */}
                            </div>
                            <div>
                                <button className='border-2 px-6 py-2 bg-white rounded-lg mb-4'>{RemoteOrOnsite}</button>
                            </div>
                        </div>
                        <div className='md:flex'>
                            <p className='flex items-center mr-6'>
                                <MapPinIcon className="h-6 w-6 text-blue-500" />
                                {Location}
                            </p>
                            <p className='flex items-center mt-2 md:mt-0'>
                                <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                                Salary : {Salary}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/details/${job._id}`}  className='custom-btn mt-4 w-full '>
                        View Details
                    </Link>
                    {/* <a className='custom-btn mt-4 w-full ' href='http://www.accenture.com/in-en/careers/jobdetails'>View Details</a> */}
                </div>
            </div>
        </div>
    );
};

export default SingleJobs;