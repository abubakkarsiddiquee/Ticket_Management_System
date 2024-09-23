import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TicketPage from './components/TicketPage';
import BusTicketPage from './components/BusTicketPage';
import BusInfoPage from './components/BusInfoPage';
import TicketConfirmPage from './components/TicketConfirmPage';
import PayBillForBus from './components/PaybillForBus';
import BkashPaymentForm from './components/BkashPaymentForm';
import TicketPrintPage from './components/TicketPrintPage';
import SetReminderPage from './components/SetReminderPage';
import TrainTicketPage from './components/TrainTicketPage';
import TrainInfoPage from './components/TrainInfoPage';
import TrainConfirmPage from './components/TrainConfirmPage';
import TrainPrintPage from './components/TrainPrintPage';
import SetReminderForTrain from './components/SetReminderForTrain';
import SignupPage from './components/SignupPage';
import ProfilePage from './components/ProfilePage';
import LogInPage from './components/LogInPage'; 
import HotelPage from './components/HotelPage';
import CarRentPage from './components/CarRentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/bus-ticket" element={<BusTicketPage />} />
        <Route path="/bus-info" element={<BusInfoPage />} />
        <Route path="/ticket-confirm" element={<TicketConfirmPage/>} />
        <Route path="/paybill" element={<PayBillForBus />} />
        <Route path="/bkash-payment" element={<BkashPaymentForm />} />
        <Route path="/ticket-print" element={<TicketPrintPage />} />
        <Route path="/set-reminder" element={<SetReminderPage />} />
        <Route path="/train-ticket" element={<TrainTicketPage />} />
        <Route path="/train-info" element={<TrainInfoPage />} />
        <Route path="/train-confirm" element={<TrainConfirmPage />} />
        <Route path="/train-print" element={<TrainPrintPage />} />
        <Route path="/set-reminder-for-train" element={<SetReminderForTrain />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/car-rent" element={<CarRentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
