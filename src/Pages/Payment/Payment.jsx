import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  return (
    <div className='bg-base-200 min-h-screen'>
      <div className='container mx-auto w-[800px] mt-10 border p-20 shadow-md bg-white rounded'>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
