import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [transitionId, setTransitionId] = useState("");
  const [clientInfo, setClientInfo] = useState();

  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useAuth();

  useEffect(() => {
    if (id) {
      axiosSecure.post(`/paymentIntent/${id}`).then((res) => {
        setClientInfo(res.data);
      });
    }
  }, [axiosSecure, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientInfo?.clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      if (paymentIntent.status === "succeeded") {
        console.log("transition Id:", paymentIntent.id);
        setTransitionId(paymentIntent.id);

        // save the payment item in the db
        const payment = {
          email: user.email,
          name: user.displayName,
          profilePicture: user.photoURL,
          contestId: clientInfo?._id,
          transitionId: paymentIntent.id,
        };

        const res = await axiosSecure.post("/payments", payment);
        if (res.status === 200) {
          navigate("/dashboard/participatedContest");
          Swal.fire({
            title: "Congratulation",
            text: "Registration Successful!",
            icon: "success",
          });

          const { data } = await axiosSecure.patch(`/contest/${id}`);
          console.log("updated participate:", data);
        }

        console.log(res);
      }
    }
  };

  return (
    <div className='space-y-16 border-2 mx-auto w-[370px] md:w-[600px]  lg:w-[800px]   p-10 shadow-2xl bg-white rounded-lg my-20'>
      <div>
        <h2 className='text-center text-2xl md:text-3xl font-semibold'>
          Payment for:{clientInfo?.name} Contest
        </h2>
        <p className='text-center mt-4 md:text-xl font-semibold'>
          Payment Amount:${clientInfo?.entryFee}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#000000",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className='flex justify-center'>
          <button
            className='btn btn-primary my-16'
            type='submit'
            disabled={!stripe || !clientInfo?.clientSecret}
          >
            Pay
          </button>
        </div>
        <p className='text-red-600'>{error}</p>
        {transitionId && (
          <p className='text-green-600'>Your Transition id is:{transitionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
