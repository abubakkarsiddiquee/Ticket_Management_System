import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SetReminderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get passed state from previous page
  const { selectedBus, seatNo, date, time } = location.state;
  
  // Form state
  const [formData, setFormData] = useState({
    transportationNo: selectedBus.name,
    seatNo: seatNo,
    date: date,
    time: time
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reminder logic here
    alert('Reminder set successfully!');
    // Navigate back to some page (e.g., home or confirmation)
    navigate('/');
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
            src={require('../assets/Timmy.jpg')}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-bold">Timmy</p>
            <p className="text-sm">timmy329@gmail.com</p>
          </div>
        </div>
      </nav>

      {/* Reminder Form */}
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold mb-6">Set Reminder</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-1/2">
          <div>
            <label className="block text-lg font-medium mb-2">Transportation No:</label>
            <input
              type="text"
              name="transportationNo"
              value={formData.transportationNo}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Seat No:</label>
            <input
              type="text"
              name="seatNo"
              value={formData.seatNo}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-md text-lg mt-4"
          >
            Set Reminder
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetReminderPage;
