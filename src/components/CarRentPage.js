import React, { useState } from 'react';
import timmyImage from '../assets/Timmy.jpg';  // Import Timmy's profile image

const CarRentPage = () => {
  const [phone, setPhone] = useState('');
  const [nidPassport, setNidPassport] = useState('');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleNidPassportChange = (e) => {
    setNidPassport(e.target.value);
  };

  const handleRegister = () => {
    // Handle the registration logic
    console.log(`Phone: ${phone}, NID/Passport: ${nidPassport}`);
  };

  return (
    <div className="bg-[#F7E16B] h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-black text-white">
        <div className="flex space-x-4">
          <a href="/" className="text-lg">Home</a>
          <a href="/ticket" className="text-lg">Ticket</a>
          <a href="/hotel" className="text-lg">Hotel</a>
          <a href="/car-rent" className="text-lg">Car Rent</a>
        </div>
        <div className="flex items-center space-x-4">
          {/* Use Timmy's photo from assets */}
          <img
            src={timmyImage}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-bold">Timmy</p>
            <p className="text-sm">timmy329@gmail.com</p>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-3/4">
        <div className="bg-white p-8 rounded-md shadow-md w-3/4 md:w-1/2">
          <h1 className="text-3xl mb-6 text-center">Car Rent Registration</h1>
          <div className="flex flex-col space-y-6 items-center">
            {/* Phone Input */}
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">Your Phone:</label>
              <input
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                className="bg-black text-white py-3 px-6 rounded-md w-full"
                placeholder="Enter your phone number"
              />
            </div>

            {/* NID/Passport Input */}
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">NID/Passport No:</label>
              <input
                type="text"
                value={nidPassport}
                onChange={handleNidPassportChange}
                className="bg-black text-white py-3 px-6 rounded-md w-full"
                placeholder="Enter your NID or Passport number"
              />
            </div>

            {/* Register Button */}
            <button
              onClick={handleRegister}
              className="bg-black text-white py-3 px-6 rounded-md w-full md:w-2/3"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentPage;
