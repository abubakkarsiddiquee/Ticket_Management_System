// PayBillForBus.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PayBillForBus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedBus, from, to, date, time } = location.state || {};

  const handlePayWithBkash = () => {
    // Navigate to BkashPaymentForm
    navigate('/bkash-payment', {
      state: { selectedBus, from, to, date, time }
    });
  };

  return (
    <div className="bg-[#F7E16B] h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Pay for Your Ticket</h1>
      <button
        onClick={handlePayWithBkash}
        className="bg-green-500 text-white py-2 px-4 rounded-lg"
      >
        Pay with Bkash
      </button>
    </div>
  );
};

export default PayBillForBus;
