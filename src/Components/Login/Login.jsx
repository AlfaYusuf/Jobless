import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Form/Form'; // Assuming Form is located in the ../Form/Form
import { useAuth } from '../../AuthContext';

const Login = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // State to manage error messages
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    const { login } = useAuth(); // Get login function from AuthContext

    // Handle change in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async(e) => {
        debugger
        e.preventDefault();

        // Simple validation: check if username and password match
        if (formData.username === 'Jobless@Job.com' && formData.password === 'Jobless@123') {
            login(); // Call login function to update authentication status
            navigate('/form'); // Navigate to Form component
        } else {
            setError('Invalid username or password');
        }

        try {
            // Proceed with API request if validation passes
            const response = await fetch('https://joblessapi-1.onrender.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data); // Handle response from server if needed
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 border border-gray-300 rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-semibold mb-1">Username</label>
                    <input
                        type="email"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
