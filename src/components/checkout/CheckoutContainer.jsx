import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTotal } from "../../app/slices/cartSlice";
import { stepOne } from "../../app/slices/checkoutSlice";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Checkout from "./Checkout";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  font-family: "Bodoni Moda";
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 16px;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
`;

const Disclaimer = styled.div``;
const DisclaimerParagraph = styled.p`
  font-size: 12px;
`;

const CheckoutContainer = (props) => {
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const checkout = useSelector((state) => state.checkout);
  const reduxStep = useSelector((state) => state.checkout.step);
  console.log();

  useEffect(() => {
    dispatch(setTotal(props.total));
    /* dispatch(stepOne(cart.items)); */
  }, []);

  useEffect(() => {
    setStep(reduxStep);
  }, [reduxStep]);

  const Stepper = (step) => {
    switch (step) {
      case 1:
        return <StepOne />;
        break;
      case 2:
        return <StepTwo />;
        break;
      case 3:
        return <Checkout />;

      default:
        return null;
        break;
    }
  };

  return (
    <>
      <HeaderContainer>
        <Title>Paso {step} de 3</Title>
        <Button onClick={() => props.closeModal(false)}>X</Button>
      </HeaderContainer>
      {Stepper(step)}
      <Disclaimer>
        <DisclaimerParagraph>
          EVJ almacena sus datos para fines propios y no comercia con ellos bajo
          ningún concepto. Al pulsar siguiente, aceptas nuestras políticas de
          tratamiento de datos.
        </DisclaimerParagraph>
      </Disclaimer>
    </>
  );
};

export default CheckoutContainer;
