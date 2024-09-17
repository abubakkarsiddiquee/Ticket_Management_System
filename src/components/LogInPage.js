import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogInPage = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = (e) => {
    e.preventDefault();
    // Simulate log-in process (you can add validation or API call here)
    // After successful log-in, navigate to the profile page
    navigate('/profile');
  };

  return (
    <div className="bg-[#F7E16B] h-screen flex flex-col justify-center items-center">
      <h1 className="text-black font-bold text-4xl mb-8">Log In</h1>
      <form className="bg-white p-8 rounded-md shadow-md w-full max-w-lg" onSubmit={handleLogIn}>
        <div className="mb-4">
          <label className="block text-black text-lg mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded-md p-2 w-full"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black text-lg mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black rounded-md p-2 w-full"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="bg-black text-white py-2 px-6 rounded-md text-lg w-full">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogInPage;
