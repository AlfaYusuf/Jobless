import React, { useEffect, useState } from 'react';
import SingleJobs from '../SingleJobs/SingleJobs';

const JobSection = () => {
    const [jobs, setJobs] = useState([]);
    const [seeAll, setAll] = useState(false);

    useEffect(() => {
        fetch('https://joblessapi.onrender.com/getjobs')
            .then((res) => res.json())
            .then((data) => {
                console.log('Fetched jobs:', data);
                setJobs(data); 
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    
    return (
        <div className='text-center my-6'>
            <h1 className='text-5xl custom-text p-4'>Featured Jobs </h1>
            <p className='text-lg my-4'>Explore thousands of job opportunities with all the information you need. It's your future</p>
            
            {jobs.length === 0 ? (
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
            )}
            
            {seeAll ? (
                <button onClick={() => setAll(false)} className='custom-btn mt-6'>Show Less</button>
            ) : (
                <button onClick={() => setAll(true)} className='custom-btn mt-6'>Show All</button>
            )}
        </div>
    );
};

export default JobSection;
