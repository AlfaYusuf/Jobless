import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate  } from 'react-router-dom';

const Form = () => {
    const location = useLocation();
    const job = location.state?.job; // Get job from location state
    const navigate = useNavigate(); // Initialize navigate function

    const [formData, setFormData] = useState({
        CompanyName: '',
        JobTitle: '',
        JobDescription: '',
        Salary: '',
        Location: '',
        Address: '',
        Link: '',
        Experience: '',
        Email: '',
        Contact: '',
        EducationRequirement: '',
        RemoteOrOnsite: '',
        JobType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        // debugger
        e.preventDefault();

        const submissionData = {
            ...formData,
            Salary: formData.Salary || 'Not disclosed', // Set to "Not disclosed" if empty
            Contact: formData.Contact || 'Not disclosed', // Set to "Not disclosed" if empty
            Email: formData.Email || 'Not disclosed', // Set to "Not disclosed" if empty/ Convert Contact to number if present
        };

        const method = job ? 'PUT' : 'POST'; // Determine method based on editing
        const apiUrl = `https://joblessapi-1.onrender.com/${job ? `updatejob/${job._id}` : 'postjob'}`;

        try {
            const response = await fetch(apiUrl, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),  // Use submissionData for form submission
            });

            if (response.ok) {
                const result = await response.json();
                // console.log('Form data submitted successfully:', result);
                toast.success('Successfully submitted');
                setFormData({
                    CompanyName: '',
                    JobTitle: '',
                    JobDescription: '',
                    Salary: '',
                    Location: '',
                    Address: '',
                    Link: '',
                    Experience: '',
                    Email: '',
                    Contact: '',
                    EducationRequirement: '',
                    RemoteOrOnsite: '',
                    JobType: ''
                });

                if (method === 'PUT') {
                    // Redirect to home page after a successful update
                    setTimeout(() => {
                        navigate('/'); // Redirect to the home page
                    }, 2000); // Delay before redirecting
                }// 1 second delay before redirecting
              // Close form after submission
            } else {
                const errorText = await response.text();
                console.error('Failed to submit form data:', response.statusText, errorText);
                toast.error('Failed to submit form: ' + response.statusText);
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            toast.error('An error occurred: ' + error.message);
        }
    };
    
    const onClose= () =>  navigate('/'); // Redirect to the home page
    

    useEffect(() => {
        if (job) {
            setFormData(job); // Pre-fill form with job data
        }
    }, [job]);

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 header-containerForm">
            <h2 className="text-2xl font-bold mb-4">{job ? 'Edit Job' : 'Job Form'}</h2>
            <div className="grid grid-cols-1 gap-4">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="flex flex-col">
                        <label htmlFor={key} className="mb-2 font-semibold">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                        <input
                            type={
                                key === 'Salary' || key === 'Contact' ? 'text' // Allow text input for Salary and Contact
                                : 'text'  // Use text for Email to allow no validation for '@'
                            }
                            id={key}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="border border-gray-300 rounded p-2"
                        />
                    </div>
                ))}
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                {job ? 'Update' : 'Save'}
            </button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded mt-4 ml-2">
                Cancel
            </button>
            <Toaster />
        </form>
    );
};

export default Form;
