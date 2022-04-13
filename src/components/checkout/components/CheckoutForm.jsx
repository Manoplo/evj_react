import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import styled from "styled-components";
import { CreditCardOutlined } from "@material-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  background: black;
  color: white;
  padding: 5px;
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const user = JSON.parse(localStorage.getItem("user"));
  const shippingData = useSelector((state) => state.checkout.shipping);
  const userData = useSelector((state) => state.checkout.user);
  const items = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          /* if (!user) {
            const userInfo = {
              user: userData,
              shipping: shippingData,
              items: items,
            };
            axios
              .post("http://elvestidordejulietta.test/api/v1/orders", userInfo)
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => console.log(err));
          } */
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // SI no existe el usuario auth en el localstorage, se crea un objeto userInfo
    if (!user) {
      const userInfo = {
        user: userData,
        shipping: shippingData,
        items: items,
      };
      // Se almacena el objeto userInfo para recuperarlo en la pantalla de success
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }

    if (!stripe && !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("Ha ocurrido un error inesperado...");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <Button disabled={isLoading || !stripe || !elements} id="submit">
        <CreditCardOutlined />
        <span id="button-text">
          {isLoading ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "PAGAR AHORA"
          )}
        </span>
      </Button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
