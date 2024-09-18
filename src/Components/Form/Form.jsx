import React, { useState } from 'react';

const Form = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        JobTitle: '',
        JobDescription: '',
        Salary: '',
        Location: '',
        Address: '',
        Link: '',
        Experience: '',
        Email: '',
        ContactNumber: '',
        Requirement: '',
        RemoteOrOnsite: '',
        JobType: ''
    });

    // Handle change in input fields
    const handleChange = (e) => {
         debugger
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        debugger
        e.preventDefault();

        console.log('Form data:', formData);

        try {
            // Send POST request to the API with formData
            const response = await fetch('http://192.168.11.31:5195/api/JobDetails/SaveJobDetailes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle successful response
                const result = await response.json();
                console.log('Form data submitted successfully:', result);
            } else {
                // Handle error response
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
                            type={key === 'Salary' || key === 'ContactNumber' ? 'number' : 'text'}
                            id={key}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="border border-gray-300 rounded p-2"
                            required
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
