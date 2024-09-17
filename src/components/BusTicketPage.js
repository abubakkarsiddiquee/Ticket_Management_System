import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BusTicketPage = () => {
  const navigate = useNavigate();
  
  // State to hold the form data
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    // Navigate to BusInfoPage with form data as state
    navigate('/bus-info', { state: formData });
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
          <img src={require('../assets/Timmy.jpg')} alt="Timmy" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-bold">Timmy</p>
            <p className="text-sm">timmy329@gmail.com</p>
          </div>
        </div>
      </nav>

      {/* Form for selecting bus ticket details */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Bus Ticket</h1>

        <div className="mb-4">
          <label className="block mb-2">From:</label>
          <select
            name="from"
            value={formData.from}
            onChange={handleInputChange}
            className="w-full p-2 border"
          >
            <option value="">Select City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Khulna">Khulna</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Barishal">Barishal</option>
            <option value="Comilla">Comilla</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Jessore">Jessore</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">To:</label>
          <select
            name="to"
            value={formData.to}
            onChange={handleInputChange}
            className="w-full p-2 border"
          >
            <option value="">Select City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Khulna">Khulna</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Barishal">Barishal</option>
            <option value="Comilla">Comilla</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Jessore">Jessore</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full p-2 border"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full p-2 border"
          />
        </div>

        <button
          onClick={handleSearch}
          className="w-full bg-black text-white p-4 mt-4"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default BusTicketPage;
