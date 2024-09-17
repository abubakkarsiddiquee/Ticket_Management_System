import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SetReminderForTrain = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedTrain, seatNo, date, time, from, to } = location.state;  // Extract data from location.state

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle reminder (save to database or local storage, notify user, etc.)
    alert(`Reminder set for Train: ${selectedTrain.name}, Seat No: ${seatNo}`);

    // Navigate back to TrainPrintPage after setting reminder
    navigate('/train-print', { state: { selectedTrain, from, to, date, time, seatNo } });
  };

  return (
    <div className="bg-[#F7E16B] h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Set Reminder for Train</h1>

      {/* Reminder Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="transportationNo" className="block font-semibold">Train Name:</label>
          <input
            id="transportationNo"
            type="text"
            defaultValue={selectedTrain.name}
            className="w-full border border-gray-300 rounded-md p-2"
            disabled
          />
        </div>
        <div>
          <label htmlFor="seatNo" className="block font-semibold">Seat No:</label>
          <input
            id="seatNo"
            type="text"
            defaultValue={seatNo}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block font-semibold">Date:</label>
          <input
            id="date"
            type="date"
            defaultValue={date}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="time" className="block font-semibold">Time:</label>
          <input
            id="time"
            type="time"
            defaultValue={time}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4"
        >
          Set Reminder
        </button>
      </form>
    </div>
  );
};

export default SetReminderForTrain;
