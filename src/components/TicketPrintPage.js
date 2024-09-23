import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const TicketPrintPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Default values for safety
  const {
    selectedBus = { name: 'Unknown Bus' },
    seatNo = 'N/A',
    date = 'N/A',
    time = 'N/A'
  } = location.state || {};

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add ticket content to the PDF
    doc.setFontSize(20);
    doc.text('Ticket Confirmation', 20, 20);
    
    doc.setFontSize(14);
    doc.text(`Bus Name: ${selectedBus.name}`, 20, 40);
    doc.text(`Seat No.: ${seatNo}`, 20, 50);
    doc.text(`Date: ${date}`, 20, 60);
    doc.text(`Time: ${time}`, 20, 70);

    // Save the PDF with a custom name
    doc.save('ticket.pdf');
  };

  const handleSetReminder = () => {
    // Navigate to SetReminderPage
    navigate('/set-reminder', { state: { selectedBus, seatNo, date, time } });
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

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
        <p className="text-xl mb-4">Your ticket has been confirmed.</p>
        <p className="text-xl mb-4">Your Bus is: <strong>{selectedBus.name}</strong></p>
        <p className="text-xl mb-4">Your Seat No.: <strong>{seatNo}</strong></p>
        <p className="text-xl mb-4">Time & Date: <strong>{time}, {date}</strong></p>

        {/* Buttons */}
        <div className="flex space-x-6 mt-6">
          <button
            className="bg-black text-white py-3 px-6 rounded-md text-lg"
            onClick={handlePrint}
          >
            Print Ticket
          </button>
          <button
            className="bg-black text-white py-3 px-6 rounded-md text-lg"
            onClick={handleDownloadPDF}
          >
            Download PDF
          </button>
        </div>

        {/* Reminder Section */}
        <p className="text-xl mt-10">
          You can set a reminder for your schedule, to not miss your bus.
        </p>
        <button
          className="bg-black text-white py-3 px-6 rounded-md text-lg mt-4"
          onClick={handleSetReminder}
        >
          Set Reminder
        </button>
      </div>
    </div>
  );
};

export default TicketPrintPage;
