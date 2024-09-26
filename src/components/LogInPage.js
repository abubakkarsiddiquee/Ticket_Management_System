import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      
      // Navigate to the home page
      navigate('/profile');
    } catch (error) {
      console.error('Error occurred:', error);
      // Use SweetAlert to show an error message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid password or email. Please try again.',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div className="bg-[#F7E16B] flex flex-col justify-center items-center h-screen">
      <h1 className="text-black font-bold text-4xl mb-8">Login</h1>
      <form className="bg-white p-8 rounded-md shadow-md w-full max-w-lg" onSubmit={handleLogin}>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-black text-lg mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded-md p-2 w-full"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-black text-lg mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black rounded-md p-2 w-full"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-black text-white py-2 px-6 rounded-md text-lg w-full">
          Login
        </button>
        
        {/* Link to Signup Page */}
        <div className="mt-4 text-center">
          <p className="text-black">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500 underline">
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
