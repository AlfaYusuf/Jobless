import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // State to manage error messages
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    // Handle change in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation example
        if (formData.username === 'Test@gmail.com' && formData.password === 'Test@123') {
            console.log('Login successful');
            // Redirect or handle successful login
            navigate('/form');
        } else {
            setError('Invalid username or password');
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
                {/* <Link to={'/Form'}  > */}
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                    Login
                </button>
                {/* </Link> */}
            </form>
        </div>
    );
};

export default Login;
