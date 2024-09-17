import React from 'react';
import { useNavigate } from 'react-router-dom';
import stayBookedImage from '../assets/Staybook.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7E16B] h-screen">
      {/* Upper Section (Image) */}
      <div className="h-1/2 flex justify-center items-center">
        <img src={stayBookedImage} alt="Stay Booked" className="h-full w-full object-cover" />
      </div>

      {/* Lower Section (Buttons + Text) */}
      <div className="h-1/2 relative flex flex-col justify-around items-center">
        {/* Button Row */}
        <div className="flex justify-center space-x-4">
          <button
            className="bg-black text-white py-2 px-6 rounded-md text-lg"
            onClick={() => navigate('/ticket')}
          >
            Ticket
          </button>
          <button
            className="bg-black text-white py-2 px-6 rounded-md text-lg"
            onClick={() => navigate('/hotel')}
          >
            Hotel
          </button>
          <button
            className="bg-black text-white py-2 px-6 rounded-md text-lg"
            onClick={() => navigate('/car-rent')}
          >
            Car Rent
          </button>
          <button
            className="bg-black text-white py-2 px-6 rounded-md text-lg"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Text Section */}
        <div className="absolute bottom-6 left-6">
          <h1 className="text-black font-bold text-5xl">STAY BOOKED</h1>
          <p className="text-black text-2xl mt-2">
            An online ticket platform and holiday planner,<br />
            providing users an efficient and seamless experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
