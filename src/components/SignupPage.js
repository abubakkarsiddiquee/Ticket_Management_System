import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignupPage = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    gender: '',
    age: '',
    phone: '',
    countryCode: '+880', // Default country code for Bangladesh
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState(''); // For handling success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // Fetch request to signup
      const res = await fetch('http://localhost:5002/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          name: formData.name,
          gender: formData.gender,
          age: formData.age,
          phone: `${formData.countryCode}${formData.phone}`,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('User created successfully');
        

     Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
        navigate('/profile'); // Navigate to profile page upon success
      } else {
        setMessage(data.error || 'Signup failed');
      }
    } catch (error) {
      setMessage('Error occurred: ' + error.message);
    }
  };

  const handleLogInRedirect = () => {
    navigate('/login'); // Redirect to the LogInPage
  };

  return (
    <div className="bg-[#F7E16B] flex flex-col justify-center items-center">
      <h1 className="text-black font-bold text-4xl mb-8">Sign Up</h1>
      <form className="bg-white p-8 rounded-md shadow-md w-full max-w-lg" onSubmit={handleSignUp}>
        {/* Username */}
        <div className="mb-4">
          <label className="block text-black text-lg mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border border-black rounded-md p-2 w-full"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-black text-lg mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-black rounded-md p-2 w-full"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-black text-lg mb-2">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border border-black rounded-md p-2 w-full"
            required
          >
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block text-black text-lg mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="border border-black rounded-md p-2 w-full"
            placeholder="Enter your age"
            required
          />
        </div>

        {/* Phone with Country Code */}
        <div className="mb-4">
          <label className="block text-black text-lg mb-2">Phone</label>
          <div className="flex">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="border border-black rounded-l-md p-2"
              required
            >
              <option value="+880">+880 (Bangladesh)</option>
              <option value="+92">+92 (Pakistan)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+1">+1 (US)</option>
              <option value="+7">+7 (Russia)</option>
            </select>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-black rounded-r-md p-2 w-full"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-black text-lg mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-black rounded-md p-2 w-full"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-black text-lg mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-black rounded-md p-2 w-full"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-black text-lg mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-black rounded-md p-2 w-full"
            placeholder="Confirm your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-black text-white py-2 px-6 rounded-md text-lg w-full">
          Sign Up
        </button>

        {/* Message */}
        {message && <p className="text-center mt-4">{message}</p>}

        {/* Log In Button for Existing Users */}
        <div className="mt-4">
          <p className="text-black text-center">
            Already have an account?{' '}
            <button
              type="button"
              onClick={handleLogInRedirect}
              className="text-blue-500 underline"
            >
              Log In
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
