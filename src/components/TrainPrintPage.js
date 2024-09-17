import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TrainPrintPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract data from location.state
  const { selectedTrain, from, to, date, time, seatNo } = location.state;

  // Handle navigation to SetReminderForTrain page
  const handleSetReminder = () => {
    navigate('/set-reminder-for-train', {
      state: { selectedTrain, from, to, date, time, seatNo },
    });
  };

  // Handle printing the ticket
  const handlePrint = () => {
    window.print();
  };

  // Handle downloading PDF (this could be replaced with real PDF download logic)
  const handleDownloadPDF = () => {
    alert('Download PDF functionality will be implemented later.');
  };

  return (
    <div className="bg-[#F7E16B] h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
      <p className="text-xl mb-4">Your train ticket has been confirmed.</p>

      {/* Display Ticket Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Ticket Information:</h2>
        <p className="text-lg mb-2"><strong>Train Name:</strong> {selectedTrain.name}</p>
        <p className="text-lg mb-2"><strong>From:</strong> {from}</p>
        <p className="text-lg mb-2"><strong>To:</strong> {to}</p>
        <p className="text-lg mb-2"><strong>Date:</strong> {date}</p>
        <p className="text-lg mb-2"><strong>Time:</strong> {time}</p>
        <p className="text-lg mb-2"><strong>Seat No:</strong> {seatNo}</p>
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-6">
        <button
          onClick={handlePrint}
          className="bg-black text-white py-3 px-6 rounded-md text-lg"
        >
          Print Ticket
        </button>
        <button
          onClick={handleDownloadPDF}
          className="bg-black text-white py-3 px-6 rounded-md text-lg"
        >
          Download PDF
        </button>
        <button
          onClick={handleSetReminder}
          className="bg-blue-500 text-white py-3 px-6 rounded-md text-lg"
        >
          Set Reminder
        </button>
      </div>
    </div>
  );
};

export default TrainPrintPage;
