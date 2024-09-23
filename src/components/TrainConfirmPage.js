import { useNavigate } from 'react-router-dom';

const TicketConfirmPage = () => {
  const navigate = useNavigate();

  const selectedBus = {
    name: 'Shyamoli Paribahan',
    price: 500, // Example data
  };

  const seatNo = 'A1';
  const date = '2024-09-25';
  const time = '10:30 AM';

  const handleProceedToPayment = () => {
    // Pass the selected bus details, seatNo, date, and time to BkashPaymentForm.js
    navigate('/bkash-payment', {
      state: {
        selectedBus,
        seatNo,
        date,
        time,
      },
    });
  };

  return (
    <div>
      <h1>Confirm Your Ticket</h1>
      <p>Bus: {selectedBus.name}</p>
      <p>Seat: {seatNo}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>

      <button onClick={handleProceedToPayment}>Pay with Bkash</button>
    </div>
  );
};

export default TicketConfirmPage;
