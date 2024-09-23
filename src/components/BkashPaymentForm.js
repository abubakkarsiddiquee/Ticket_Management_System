import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BkashPaymentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve amount and selected bus from TicketConfirmPage
  const { selectedBus } = location.state || {};
  const ticketPrice = selectedBus?.price || 0;

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [pin, setPin] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!otpSent) {
      if (phoneNumber.length !== 11) {
        setError('Mobile number must be 11 digits.');
        return;
      }

      setLoading(true);
      console.log(`Sending OTP to ${phoneNumber} for amount ${ticketPrice} BDT...`);
      // Simulate sending OTP here
      setOtpSent(true);
      setLoading(false);
    } else if (otpSent && !pin) {
      if (otp.length !== 6) {
        setError('OTP must be 6 digits.');
        return;
      }
      // Simulate OTP verification here, if successful, request PIN entry
      setLoading(true);
      console.log(`Verifying OTP ${otp} for ${phoneNumber}...`);
      setLoading(false);
    } else {
      if (pin.length !== 5) {
        setError('PIN must be 5 digits.');
        return;
      }

      // Simulate PIN verification success
      console.log(`Verifying PIN ${pin} for ${phoneNumber}...`);
      alert('Payment successful!');

      // Navigate to TicketPrintPage after successful payment
      navigate('/ticket-print', {
        state: {
          selectedBus,
          seatNo: 'A1',  // You can replace this with the actual seat number
          date: '2024-09-25',  // Replace with actual date
          time: '10:30 AM' // Replace with actual time
        }
      });
    }
  };

  return (
    <div className="bg-[#F7E16B] h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Bkash Payment</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handlePaymentSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Mobile Number (11 digits):</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              maxLength={11}
              className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          {otpSent && (
            <>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">OTP (6 digits):</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  maxLength={6}
                  className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">PIN (5 digits):</label>
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required
                  maxLength={5}
                  className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <p className="font-semibold">Amount: <span className="text-green-600">{ticketPrice} BDT</span></p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`bg-green-500 text-white py-2 px-4 rounded w-full transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
          >
            {otpSent ? (pin ? 'Verify PIN' : 'Verify OTP') : 'Send OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BkashPaymentForm;
