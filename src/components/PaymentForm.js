// // src/components/PaymentForm.js
// import React from 'react';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// // Replace with your actual publishable key
// const stripePromise = loadStripe('pk_test_51PzfGy07aA9OcBF1chBQUqGveIBJx7hJ3Ld4d1LTdzUvzY9E8LFzl2kE1D0rEpZhkIRcCW0OwO2WEtL8ENJwyxhY000r0WDzbZ');

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       console.error('Payment error:', error);
//     } else {
//       console.log('Payment method:', paymentMethod);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col items-center">
//       <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
//       <div className="w-full max-w-md">
//         <CardElement className="p-2 border border-gray-300 rounded-md" />
//       </div>
//       <button
//         type="submit"
//         className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg"
//         disabled={!stripe}
//       >
//         Pay Now
//       </button>
//     </form>
//   );
// };

// const PaymentForm = () => (
//   <Elements stripe={stripePromise}>
//     <CheckoutForm />
//   </Elements>
// );

// export default PaymentForm;
