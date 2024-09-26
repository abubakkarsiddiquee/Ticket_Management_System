import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SeatSelect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedBus, from, to, date, time } = location.state || {};

  const seatRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat)); // Deselect seat
    } else if (selectedSeats.length < 4) {
      setSelectedSeats([...selectedSeats, seat]); // Add seat if less than 4
    } else {
      alert('You can only select a maximum of 4 seats.');
    }
  };

  const handleConfirm = () => {
    if (selectedSeats.length > 0) {
      navigate('/ticket-confirm', {
        state: { selectedBus, from, to, date, time, selectedSeats }
      });
    } else {
      alert('Please select at least one seat.');
    }
  };

  return (
    <div className="h-screen bg-[#F7E16B] flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold mb-4">Select Your Seats (Max 4)</h1>
      
      {/* Bus Layout */}
      <div className="grid grid-cols-5 gap-4">
        {/* Front Row for Door and Driver */}
        <div className="col-span-5 flex justify-between mb-8">
          <div className="border py-2 px-4 bg-gray-300 text-lg">Door</div>
          <div className="border py-2 px-4 bg-gray-300 text-lg">Driver</div>
        </div>

        {/* Seat Grid with vertical gaps between rows */}
        {seatRows.map((row) => (
          <div className="col-span-5 flex justify-between mb-6" key={row}>
            {/* Left Side Seats */}
            <div className="flex space-x-4">
              <button
                onClick={() => handleSeatSelect(`${row}1`)}
                className={`border py-2 px-4 text-lg font-semibold ${
                  selectedSeats.includes(`${row}1`) ? 'bg-green-500 text-white' : 'bg-white'
                }`}
              >
                {row}1
              </button>
              <button
                onClick={() => handleSeatSelect(`${row}2`)}
                className={`border py-2 px-4 text-lg font-semibold ${
                  selectedSeats.includes(`${row}2`) ? 'bg-green-500 text-white' : 'bg-white'
                }`}
              >
                {row}2
              </button>
            </div>

            {/* Aisle gap between seat pairs */}
            <div className="w-10"></div> {/* Space for aisle */}

            {/* Right Side Seats */}
            <div className="flex space-x-4">
              <button
                onClick={() => handleSeatSelect(`${row}3`)}
                className={`border py-2 px-4 text-lg font-semibold ${
                  selectedSeats.includes(`${row}3`) ? 'bg-green-500 text-white' : 'bg-white'
                }`}
              >
                {row}3
              </button>
              <button
                onClick={() => handleSeatSelect(`${row}4`)}
                className={`border py-2 px-4 text-lg font-semibold ${
                  selectedSeats.includes(`${row}4`) ? 'bg-green-500 text-white' : 'bg-white'
                }`}
              >
                {row}4
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={handleConfirm}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Confirm Seats
        </button>
      </div>
    </div>
  );
};

export default SeatSelect;
