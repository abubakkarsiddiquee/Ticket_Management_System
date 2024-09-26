import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BusInfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { from, to, date, time } = location.state;

  // Example data for Bangladeshi buses
  const busInfo = [
    { name: 'Hanif Paribahan', seats: 23, price: 1000, departure: '11 PM', arrival: '6 AM' },
    { name: 'ENA Paribahan', seats: 18, price: 900, departure: '11 PM', arrival: '6 AM' },
    { name: 'Shyamol Paribahn', seats: 20, price: 950, departure: '10 PM', arrival: '5 AM' },
    { name: 'Green Line', seats: 22, price: 1100, departure: '12 PM', arrival: '7 AM' },
    { name: 'Suhag Express', seats: 15, price: 1200, departure: '9 PM', arrival: '4 AM' }
  ];

    // Navigate to TicketConfirmPage with the selected bus info
    const handleSelectBus = (selectedBus) => {
      // Navigate to SeatSelect with the selected bus info
      navigate('/seat-select', {
        state: { selectedBus, from, to, date, time },
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
          <img src={require('../assets/Timmy.jpg')} alt="Timmy" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-bold">Timmy</p>
            <p className="text-sm">timmy329@gmail.com</p>
          </div>
        </div>
      </nav>

      {/* Bus Info Display */}
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Bus Information</h1>

        {/* Display selected route details */}
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 shadow-md rounded-lg w-full md:w-1/2 text-center">
            <h2 className="text-2xl font-semibold mb-2">Your Trip Details:</h2>
            <p><strong>From:</strong> {from}</p>
            <p><strong>To:</strong> {to}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
          </div>
        </div>

        {/* Table for Bus Information */}
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Bus Name</th>
                <th className="border px-4 py-2">No of Seats</th>
                <th className="border px-4 py-2">Price (BDT)</th>
                <th className="border px-4 py-2">Departure Time</th>
                <th className="border px-4 py-2">Arrival Time</th>
                <th className="border px-4 py-2">Select</th>
              </tr>
            </thead>
            <tbody>
              {busInfo.map((bus, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{bus.name}</td>
                  <td className="border px-4 py-2">{bus.seats}</td>
                  <td className="border px-4 py-2">{bus.price}</td>
                  <td className="border px-4 py-2">{bus.departure}</td>
                  <td className="border px-4 py-2">{bus.arrival}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleSelectBus(bus)}
                      className="bg-blue-500 text-white py-1 px-2 rounded"
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusInfoPage;
