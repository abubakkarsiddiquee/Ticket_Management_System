import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TicketConfirmPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedBus, from, to, date, time } = location.state || {};

  const handleCancel = () => {
    navigate('/bus-info', { state: { from, to, date, time } });
  };

  const handlePayWithBkash = () => {
    navigate('/paybill', {
      state: { selectedBus, from, to, date, time }
    });
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
            alt="Timmy"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-bold">Timmy</p>
            <p className="text-sm">timmy329@gmail.com</p>
          </div>
        </div>
      </nav>

      {/* Ticket Confirmation Section */}
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Confirm Your Ticket</h1>

        {/* Display Selected Bus Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Bus Information:</h2>
          <p><strong>Bus Name:</strong> {selectedBus?.name}</p>
          <p><strong>Seats Available:</strong> {selectedBus?.seats}</p>
          <p><strong>Price:</strong> {selectedBus?.price} BDT</p>
          <p><strong>Departure:</strong> {selectedBus?.departure}</p>
          <p><strong>Arrival:</strong> {selectedBus?.arrival}</p>
          <p><strong>From:</strong> {from}</p>
          <p><strong>To:</strong> {to}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
        </div>

        {/* Confirm and Cancel Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleCancel}
            className="bg-red-500 text-white py-2 px-4 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handlePayWithBkash}
            className="bg-green-500 text-white py-2 px-4 rounded-lg"
          >
            Pay with Bkash
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmPage;
