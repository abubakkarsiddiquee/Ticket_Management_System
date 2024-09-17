import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TrainInfoPage = () => {
  const location = useLocation(); // Get the passed state from TrainTicketPage
  const navigate = useNavigate();

  const { from, to, date, time } = location.state; // Destructure search parameters
  const [selectedTrain, setSelectedTrain] = useState(null); // State to store selected train

  // Example train data (can be replaced with real data or fetched from API)
  const trains = [
      { id: 1, name: 'Kapotakkho Express', seats: 60, price: 350, departure: '10:00 AM', arrival: '02:30 PM' },
      { id: 2, name: 'Dhaka-Rajshahi Express', seats: 80, price: 500, departure: '08:00 AM', arrival: '01:00 PM' },
      { id: 3, name: 'Silk City Express', seats: 70, price: 400, departure: '09:00 AM', arrival: '01:30 PM' },
      { id: 4, name: 'Padma Express', seats: 90, price: 450, departure: '11:00 AM', arrival: '03:30 PM' },
      { id: 5, name: 'Chattogram Express', seats: 75, price: 380, departure: '07:00 AM', arrival: '12:00 PM' },
      { id: 6, name: 'Sylhet Express', seats: 85, price: 420, departure: '06:00 AM', arrival: '11:00 AM' },
      { id: 7, name: 'Mohanagar Express', seats: 65, price: 370, departure: '12:00 PM', arrival: '05:00 PM' },
      { id: 8, name: 'Kurigram Express', seats: 50, price: 340, departure: '05:00 PM', arrival: '09:30 PM' },
      { id: 9, name: 'Rajbari Express', seats: 60, price: 360, departure: '03:00 PM', arrival: '07:00 PM' },
      { id: 10, name: 'Jamalpur Express', seats: 55, price: 330, departure: '04:00 PM', arrival: '08:00 PM' }
      // Add more train options here
    ];

  const handleSelect = (train) => {
    setSelectedTrain(train); // Set the selected train
  };

  const handleNext = () => {
    if (selectedTrain) {
      // Navigate to TrainConfirmPage with selected train and search data
      navigate('/train-confirm', { state: { selectedTrain, from, to, date, time } });
    } else {
      alert('Please select a train.');
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
          <img src={require('../assets/Timmy.jpg')} alt="Timmy" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-bold">Timmy</p>
            <p className="text-sm">timmy329@gmail.com</p>
          </div>
        </div>
      </nav>

      {/* Train Info Section */}
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Available Trains</h1>
        <p><strong>From:</strong> {from}</p>
        <p><strong>To:</strong> {to}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>

        <div className="mt-6">
          {trains.map((train) => (
            <div
              key={train.id}
              className={`p-4 border rounded-lg mb-4 ${selectedTrain === train ? 'bg-green-300' : 'bg-white'}`}
              onClick={() => handleSelect(train)}
            >
              <h2 className="text-2xl font-semibold">{train.name}</h2>
              <p><strong>Seats Available:</strong> {train.seats}</p>
              <p><strong>Price:</strong> {train.price} BDT</p>
              <p><strong>Departure:</strong> {train.departure}</p>
              <p><strong>Arrival:</strong> {train.arrival}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="bg-black text-white py-2 px-4 rounded-lg mt-6"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TrainInfoPage;
