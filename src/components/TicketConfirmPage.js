import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TicketConfirmPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedBus, from, to, date, time, passengerName, passengerEmail } = location.state || {};

  const handleCancel = () => {
    navigate('/bus-info', { state: { from, to, date, time } });
  };

  const handleConfirm = () => {
    navigate('/bkash-payment', {
      state: {
        selectedBus,
        from,
        to,
        date,
        time,
        passengerName,
        passengerEmail,
      }
    });
  };

  return (
    <div className="bg-[#F7E16B] min-h-screen flex flex-col">
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
      <div className="flex-grow p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Confirm Your Ticket</h1>

        {/* Bus Information */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Bus Information</h2>
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

        {/* Terms and Conditions */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Terms and Conditions</h2>
          <ul className="list-disc list-inside">
            <li>Ensure you arrive at the departure point at least 30 minutes before departure.</li>
            <li>Passengers must carry valid identification.</li>
          </ul>
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
            onClick={handleConfirm}
            className="bg-green-500 text-white py-2 px-4 rounded-lg"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmPage;
