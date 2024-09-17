import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HotelPage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('Dhaka');
  const [city, setCity] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [nationality, setNationality] = useState('');
  const [rating, setRating] = useState('Any');
  const [rooms, setRooms] = useState('1');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleRoomsChange = (e) => {
    setRooms(e.target.value);
  };

  const handleSearch = () => {
    // Logic to search hotels based on form fields
    console.log(`Searching hotels in ${city} (${location}) for ${checkInDate} to ${checkOutDate} with ${rooms} room(s), nationality: ${nationality}, rating: ${rating}`);
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
            src="https://via.placeholder.com/40"  // Replace this with your actual profile photo URL
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
          <h1 className="text-3xl mb-6 text-center">Find Your Hotel</h1>
          <div className="flex flex-col space-y-6 items-center">
            {/* Location Dropdown */}
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">Your Location:</label>
              <select
                value={location}
                onChange={handleLocationChange}
                className="bg-black text-white py-3 px-6 rounded-md w-full"
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                {/* Add more locations if needed */}
              </select>
            </div>

            {/* City Dropdown */}
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">City:</label>
              <select
                value={city}
                onChange={handleCityChange}
                className="bg-black text-white py-3 px-6 rounded-md w-full"
              >
                <option value="">Select City</option>
                <option value="City1">City1</option>
                <option value="City2">City2</option>
                {/* Add more cities if needed */}
              </select>
            </div>

            {/* Check-In Date Picker */}
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">Check-In Date:</label>
              <input
                type="date"
                value={checkInDate}
                onChange={handleCheckInDateChange}
                className="bg-black text-white py-3 px-6 rounded-md w-full"
              />
            </div>

            {/* Check-Out Date Picker */}
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">Check-Out Date:</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={handleCheckOutDateChange}
                className="bg-black text-white py-3 px-6 rounded-md w-full"
              />
            </div>

            {/* Nationality Dropdown */}
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">Nationality:</label>
              <select
                value={nationality}
                onChange={handleNationalityChange}
                className="bg-black text-white py-3 px-6 rounded-md w-full"
              >
                <option value="">Select Nationality</option>
                <option value="Nationality1">Nationality1</option>
                <option value="Nationality2">Nationality2</option>
                {/* Add more nationalities if needed */}
              </select>
            </div>

            {/* Hotel Rating Dropdown */}
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">Hotel Rating:</label>
              <select
                value={rating}
                onChange={handleRatingChange}
                className="bg-black text-white py-3 px-6 rounded-md w-full"
              >
                <option value="Any">Any</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>

            {/* Room Dropdown */}
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">Number of Rooms:</label>
              <select
                value={rooms}
                onChange={handleRoomsChange}
                className="bg-black text-white py-3 px-6 rounded-md w-full"
              >
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
                <option value="4">4 Rooms</option>
                <option value="5">5 Rooms</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-black text-white py-3 px-6 rounded-md w-full md:w-2/3"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
