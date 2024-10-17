import React, { useEffect, useState } from 'react';
import SingleJobs from '../SingleJobs/SingleJobs';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../../AuthContext';

const JobSection = () => {
    const { isAuthenticated } = useAuth(); // Get authentication state from context
    const [jobs, setJobs] = useState([]);
    const [seeAll, setAll] = useState(false);
    const navigate = useNavigate(); // Initialize navigate function
    

    useEffect(() => {
        // debugger
        fetch('https://joblessapi-1.onrender.com/getjobs')
            .then((res) => res.json())
            .then((data) => {
                // console.log('Fetched jobs:', data);
                setJobs(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const deleteJob = (jobId) => {
        // debugger
        fetch(`https://joblessapi-1.onrender.com/deletejob/${jobId}`, {
            method: 'DELETE',
        })
        .then((res) => {
            if (res.ok) {
                setJobs(jobs.filter(job => job._id !== jobId));  // Remove the job from state
                toast.success('Successfully submitted');
                // console.log(`Job with id ${jobId} deleted`);
            } else {
                // console.error('Error deleting job');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const editJob = (job) => {
        navigate('/form', { state: { job } }); // Redirect to Form with job data
    };


    const fetchJobs = () => {
        fetch('https://joblessapi-1.onrender.com/getjobs')
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className='text-center my-6'>
            <h1 className='text-5xl custom-text p-4'>Featured Jobs </h1>
            <p className='text-lg my-4'>Explore thousands of job opportunities with all the information you need. It's your future</p>

            {/* {jobs.length === 0 ? (
                <p>Loading jobs...</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-4 md:w-3/4 mx-auto">
                     {console.log('seeAll state:', seeAll)}
                     {console.log('jobs data:', jobs)}
                    {seeAll
                        ? jobs.map((job) => <SingleJobs key={job._id} job={job} />)
                        : jobs.slice(0, 4).map((job) => <SingleJobs key={job._id} job={job} />)
                    }
                </div>
            )} */}

            {jobs.length === 0 ? (
                <p>Loading jobs...</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-4 md:w-3/4 mx-auto">
                {seeAll
                    ? jobs.map((job) => (
                        <SingleJobs 
                            key={job._id} 
                            job={job} 
                            onDelete={deleteJob} 
                            onEdit={editJob}  // Pass edit function
                            isAuthenticated={isAuthenticated} // Pass authentication state as prop
                        />
                    ))
                    : jobs.slice(0, 4).map((job) => (
                        <SingleJobs 
                            key={job._id} 
                            job={job} 
                            onDelete={deleteJob} 
                            onEdit={editJob}  // Pass edit function
                            isAuthenticated={isAuthenticated} // Pass authentication state as prop
                        />
                    ))
                }
            </div>
            )}

            {seeAll ? (
                <button onClick={() => setAll(false)} className='custom-btn mt-6'>Show Less</button>
            ) : (
                <button onClick={() => setAll(true)} className='custom-btn mt-6'>Show All</button>
            )}
 <Toaster />
        </div>
    );
};

export default JobSection;
