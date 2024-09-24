import React, { useEffect, useState } from 'react';
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../hooks/useTitle';

const JobDetails = () => {
    debugger
    const id = useParams();
    useTitle("Job Details")
    const [details, setDetails] = useState({});

    useEffect(() => {
        debugger
        // fetch('http://192.168.11.31:5195/api/JobDetails/GetJobs')
        fetch('/company.json')
            .then(response => response.json())
            .then(data => {
                const all = data?.find(d => parseInt(d.id) === parseInt(id.id))
                setDetails(all)
            })
    }, [])


    const handleApplyBtn = (item) => {
        let newJob = {};
        let prevJob = JSON.parse(localStorage.getItem('jobs'));

        let searchedJob = prevJob?.find((data) => data.id == item.id);
        if (!searchedJob) {
            if (!prevJob) {
                newJob = [item];
                localStorage.setItem("jobs", JSON.stringify(newJob));
                toast.success('Successfully applied');
            } else {
                newJob = [...prevJob, item];
                localStorage.setItem("jobs", JSON.stringify(newJob));
                toast.success('Successfully applied');
            }
        } else {
            toast.error('Already applied');
        }
    }

    const handleSendToWhatsApp = () => {
        debugger
        // const phoneNumber = '7972773318'; // WhatsApp number to send the data
        const message = `Job Details:
        \nJob Title: ${details.jobTitle}
        \nCompany: ${details.company_name}
        \nSalary: ${details.salary}
        \nContact: ${details.contact}
        \nEmail: ${details.email}
        \nAddress: ${details.address}
        \nLink: ${details.link}

        
         \nLink: ${details.link.startsWith('http') ? details.link : `https://${details.link}`}`;

        // WhatsApp URL
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

        // Open WhatsApp with the pre-filled message
        window.open(whatsappUrl, '_blank');
    };


    const handleShareOnLinkedIn = () => {
        debugger
        const message = `
          Check out this job opportunity:
          \nJob Title: ${details.jobTitle}
          \nCompany: ${details.company_name}
          \nSalary: ${details.salary}
          \nContact: ${details.contact}
          \nEmail: ${details.email}
          \nAddress: ${details.address}
          \nLink: ${details.link.startsWith('http') ? details.link : `https://${details.link}`}
        `;
        
        // Create a URL with encoded job details
        const encodedMessage = encodeURIComponent(message);
        const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodedMessage}`;
        
        // Open LinkedIn share dialog
        window.open(shareUrl, '_blank');
      };



    return (
        <div >
            <h1 className='text-5xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-8'>{details.company_name} - Job Details</h1>
            <div className='md:flex px-16 gap-6'>
                <div className="left w-11/12 text-lg">
                    <h1 className='tracking-wide'>
                        <span className='font-bold'>Job Description: </span>{details.jobDetailes}</h1>
                    {/* <h1 className='mt-4 tracking-wide'>
                        <span className='font-bold '>Job Responsibility:</span> {details.job_responsibility}
                    </h1> */}
                    <h1 className='font-bold mt-4 tracking-wide'>Educational Requirements:</h1>
                    <p className='tracking-wide'>{details.educationalRequirment}</p>
                    <h1 className='my-4 tracking-wide'>
                        <span className='font-bold '>Experiences:</span> {details.exprience}
                    </h1>
                </div>
                <div className='md:w-2/4'>
                    <div className="right  rounded-xl border-4 p-4 leading-loose">
                        <h1 className='font-bold text-xl mb-2'>Job Details</h1>
                        <hr />
                        <p className='flex mt-2 items-center'> <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                            <div>
                                <span className='font-bold ml-2 '>Salary: </span>
                                {details.salary}
                            </div>
                        </p>
                        <p className='flex mt-2 md:items-center' >
                            <CalendarDaysIcon className="h-6 w-6 text-blue-500" />
                            <div>
                                <span className='font-bold ml-2'>Job Title: </span>
                                {details.jobTitle}
                            </div>
                        </p>

                        <h1 className='font-bold text-xl mt-4 mb-2'>Contact Information</h1>
                        <hr />
                        <p className='flex mt-2 items-center'><PhoneIcon className="h-6 w-6 text-blue-500" />
                            <div>
                                <span className='font-bold ml-2'>Phone: </span>
                                {details.contact}
                            </div>
                        </p>
                        <p className='flex mt-2 items-center'><EnvelopeIcon className="h-6 w-6 text-blue-500" />
                            <div>
                                <span className='font-bold ml-2'>Email: </span>
                                {details.email}
                            </div>
                        </p>

                        <p className='flex mt-2 items-center'> <MapPinIcon className="h-6 w-6 text-blue-500" />
                            <div>
                                <span className='font-bold ml-2'>Address:  </span>
                                {details.address}
                            </div>
                        </p>
                    </div>
                    {/* <button onClick={() => handleApplyBtn(details)}
                        className='custom-btn w-full mt-4'>Apply Now
                    </button> */}
                    <div>
                        <a
                            href={details.link}
                            className="custom-btn mt-4 w-full"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apply Now
                        </a>
                    </div>
                    <div>
                        <button
                            onClick={handleSendToWhatsApp}
                            className="custom-btn mt-4 w-full"
                        >
                            Send to WhatsApp
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={handleShareOnLinkedIn}
                            className="custom-btn mt-4 w-full"
                        >
                            Share on LinkedIn
                        </button>
                    </div>
                    <Toaster />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;