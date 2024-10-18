import React from 'react';
import { MapPinIcon, CurrencyDollarIcon ,BriefcaseIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import "./SingleJobs.css"
import company_logo from "./../../assets/All Images/WeareHiring.png"

const SingleJobs = ({ job ,onDelete ,  onEdit ,isAuthenticated  }) => {
    // debugger
    //  console.log(job);
    const {  CompanyName, JobTitle, Location, RemoteOrOnsite, Experience,_id} = job;
    return (
        <div>
            <div className='singlejobsection mx-auto border-2 rounded-xl items-center p-4  bg-slate-200'>
                <div className='gap-4 items-center'>
                    <div className="image p-2">
                    <img src={company_logo} className="w-36" alt="Company Logo" />
                    </div>
                    <div className="details text-start p-2">
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-lg font-bold'>{JobTitle}</h1>
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
                            <BriefcaseIcon className="h-6 w-6 text-blue-500" />
                               &nbsp; <span>Experiences:</span> {Experience}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/details/${job._id}`}  className='custom-btn mt-4 w-full '>
                        View Details
                    </Link>
                    {isAuthenticated && (  // Conditional rendering based on authentication
                    <>
                    <button
                        onClick={() => onDelete(_id)}  // Call onDelete with job ID
                        className='custom-btn mt-4 bg-red-500 text-white'>
                        Delete Job
                    </button>
                    <button
                        onClick={() => onEdit(job)}  // Call onEdit with job details
                        className='custom-btn mt-4 bg-blue-500 text-white'>
                        Edit Job
                    </button>
                    </>
                      )}
                </div>
            </div>
        </div>
    );
};

export default SingleJobs;