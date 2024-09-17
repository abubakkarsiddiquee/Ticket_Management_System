import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrainTicketPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // State for search criteria
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // List of city options
  const cities = [
    'Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal',
    'Rangpur', 'Mymensingh', 'Jamalpur', 'Bogra'
  ];

  const handleSearch = () => {
    if (from && to && date && time) {
      // Navigate to TrainInfoPage with search criteria
      navigate('/train-info', { state: { from, to, date, time } });
    } else {
      alert('Please fill in all the fields.');
    }
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
          <img
            src={require('../assets/Timmy.jpg')}  // Profile picture
            alt="Timmy"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-bold">Timmy</p>
            <p className="text-sm">timmy329@gmail.com</p>
          </div>
        </div>
      </nav>

      {/* Train Ticket Search Section */}
      <div className="flex flex-col items-center justify-center h-3/4">
        <h1 className="text-3xl mb-6">Where What are you looking for?</h1>

        {/* Search Criteria Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <div className="mb-4">
            <label htmlFor="from" className="block text-lg font-medium mb-2">From:</label>
            <select
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg w-full"
            >
              <option value="" disabled>Select City</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="to" className="block text-lg font-medium mb-2">To:</label>
            <select
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg w-full"
            >
              <option value="" disabled>Select City</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-lg font-medium mb-2">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-lg font-medium mb-2">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg w-full"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-black text-white py-2 px-4 rounded-lg w-full"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainTicketPage;
