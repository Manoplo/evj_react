import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTotal } from "../../app/slices/cartSlice";
import { stepOne } from "../../app/slices/checkoutSlice";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
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

const CheckoutContainer = (props) => {
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const checkout = useSelector((state) => state.checkout);

  useEffect(() => {
    setStep(checkout.step);
    dispatch(setTotal(props.total));
    dispatch(stepOne(cart.items));
  }, [step]);

  const Stepper = (step) => {
    switch (step) {
      case 1:
        return <StepOne />;
        break;
      case 2:
        return <StepTwo />;
        break;

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
    </>
  );
};

export default CheckoutContainer;
