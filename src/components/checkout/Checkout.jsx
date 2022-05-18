import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CheckoutForm from "./components/CheckoutForm";

// Load stripe pk key

const stripePromise = loadStripe(
  "pk_test_51KnFBLE5V92POZB9wZ3k1UwYrKjsHuSgUHhhOwytDkOb9zK7RsdGi97QAAPZqio5yp0ojvYdA62uagBQFSfzAnP500mSXavtfY"
);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const response = await axios.post(
          "https://www.elvestidordejuliettaapi.tk/api/v1/stripe/payment",
          {
            items: items,
          }
        );
        console.log(response);
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };

    getClientSecret();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
