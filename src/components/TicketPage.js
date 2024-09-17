import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const TicketPage = () => {
  const navigate = useNavigate();  // Initialize navigate function

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
          <img
            src={require('../assets/Timmy.jpg')}  // Updated to use the correct image path
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
        <h1 className="text-3xl mb-6">What are you looking for?</h1>

        {/* Buttons for Bus Ticket and Train Ticket */}
        <div className="flex space-x-8">
          {/* Bus Ticket Button */}
          <button
            onClick={() => navigate('/bus-ticket')}  // Navigate to BusTicketPage on click
            className="bg-black text-white py-3 px-6 rounded-md text-lg"
          >
            Bus Ticket
          </button>
          
          {/* Train Ticket Button */}
          <button
            onClick={() => navigate('/train-ticket')}  // Navigate to TrainTicketPage on click
            className="bg-black text-white py-3 px-6 rounded-md text-lg"
          >
            Train Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
