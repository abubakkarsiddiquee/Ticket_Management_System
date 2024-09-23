import React from 'react';
import { useLocation } from 'react-router-dom';

const PaybillForBus = () => {
  const location = useLocation();
  const { selectedBus, from, to, date, time } = location.state || {};

  const handleBkashPayment = () => {
    alert('Redirecting to bKash payment gateway...');
    // Logic for bKash payment can be implemented here
  };

  const handleCardPayment = () => {
    alert('Redirecting to Card payment gateway...');
    // Logic for card payment can be implemented here
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

      {/* Payment Page Content */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Payment Page</h1>

        {/* Display Ticket Details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Ticket Details:</h2>
          <p><strong>Bus Name:</strong> {selectedBus?.name}</p>
          <p><strong>From:</strong> {from}</p>
          <p><strong>To:</strong> {to}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Price:</strong> {selectedBus?.price} BDT</p>
        </div>

        {/* Payment Options */}
        <h2 className="text-2xl font-semibold mb-4">Choose Payment Method</h2>
        <div className="flex space-x-4">
          <button
            onClick={handleBkashPayment}
            className="bg-pink-500 text-white py-2 px-4 rounded-lg"
          >
            Pay with bKash
          </button>
          <button
            onClick={handleCardPayment}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Pay with Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaybillForBus;
