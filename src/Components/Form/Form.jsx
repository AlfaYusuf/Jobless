import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        CompanyName: '',
        JobTitle: '',
        JobDescription: '',
        Salary: '',
        Location: '',
        Address: '',
        Link: '',
        Experience: '',  // Corrected
        Email: '',
        Contact: '',
        EducationRequirement: '',  // Corrected
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
        e.preventDefault();
    
        // Log form data to the console before submission
        console.log('Form data:', formData);  // This logs all form data
    
        try {
            const response = await fetch('https://joblessapi.onrender.com/postjob', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log('Form data submitted successfully:', result);
    
                // Reset the form
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
    
            } else {
                console.error('Failed to submit form data:', response.statusText);
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Job Form</h2>
            <div className="grid grid-cols-1 gap-4">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="flex flex-col">
                        <label htmlFor={key} className="mb-2 font-semibold">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                        <input
                            type={key === 'Salary' || key === 'Contact' ? 'number' : key === 'Email' ? 'email' : 'text'}
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
                Save
            </button>
        </form>
    );
};

export default Form;
