/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import { useGetAllBookingsQuery } from "../redux/features/booking/bookingApi";

const stripePromise = loadStripe(
  "pk_test_51M6eOGCnxyBmnrrVLNr4LHEpniAkZ1FhXx1cjpSZ5p6yVqQxOgF4HPGbqBs7FhDHHZFSOERMRGoOP61VqNAqa1ix008QRtthlG"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();

  const { bookingId, payableAmount, name } = location.state || {};

  const { data: bookings } = useGetAllBookingsQuery(undefined);

  const { item, quantity } = location.state || {};
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)!,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod, item, quantity);
      setPaymentSuccess(true);
    }
  };
  // Find the specific booking based on bookingId
  const booking = bookings?.data?.find((b: any) => b._id === bookingId);

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mx-auto bg-gray-900 w-[600px] rounded-lg shadow-md text-white mt-20 p-20">
        <div className="md:flex">
          <div className="w-full p-4">
            {paymentSuccess && (
              <div
                className="bg-green-100 border-l-4 border-green-500 text-green-900 p-4 mb-4 text-center rounded-sm"
                role="alert"
              >
                <p className="font-bold ">Payment successful!</p>
                <p>Thank You .</p>
              </div>
            )}
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-semibold">Confirm Payment </h2>
            </div>
            {booking && (
              <div className="mb-4 text-lg text-center text-white">
                <p className="mb-2">Facility: {name}</p>
                <p className="mb-2">Total Price: {payableAmount} $</p>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-lg font-medium  mb-2 text-center">
                Card Details
              </label>
              <div className="mt-1 ">
                <CardElement className=" w-full px-4 py-2 text-lg font-medium border rounded-lg text-white" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-md font-medium border rounded-lg "
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeWrapper;
// 3742 454554 00126
