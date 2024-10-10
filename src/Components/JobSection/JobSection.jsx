import React, { useEffect, useState } from 'react';
import SingleJobs from '../SingleJobs/SingleJobs';

const JobSection = () => {
    const [jobs, setJobs] = useState([]);
    const [seeAll, setAll] = useState(false);

    useEffect(() => {
        debugger
        // fetch('http://192.168.11.77:5195/api/JobDetails/GetJobs')
        // fetch('/company.json')
        fetch('https://joblessapi.onrender.com/getjobs')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setJobs(data); 
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    

    return (
        <div className='text-center my-6'>
            <h1 className='text-5xl custom-text p-4'>Featured Jobs </h1>
            <p className='text-lg my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 gap-4 md:w-3/4 mx-auto">
                {/* featured job card */}
                {
                    seeAll ?
                        jobs.map((job) => <SingleJobs
                            key={job._id}
                            job={job}
                        ></SingleJobs>)
                        : jobs.map((job) => <SingleJobs
                            key={job._id}
                            job={job}
                        >
                        </SingleJobs>).slice(0, 4)
                }
            </div>
            {
                seeAll ?
                // seeAll === true ?
                    <button onClick={() => setAll(!seeAll)} className='custom-btn mt-6'>Show Less</button>
                    : <button onClick={() => setAll(!seeAll)} className='custom-btn mt-6'>Show All</button>
            }
        </div>
    );
};

export default JobSection;