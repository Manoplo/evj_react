import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { prevStep, checkoutStep } from "../../app/slices/checkoutSlice";
import styled from "styled-components";

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 10px;
  background-color: white;
  color: black;
  border: 1px solid lightpink;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: lightpink;
    color: white;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Desc = styled.div`
  font-family: "Bodoni Moda";
  margin-top: 16px;
`;
const Info = styled.div`
  font-weight: 200;
`;

const Total = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 24px;
  font-weight: 800;
`;

const ConfirmData = styled.h2`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 800;
`;

const StepTwo = (props) => {
  const dispatch = useDispatch();

  const cartInfo = useSelector((state) => state.cart);
  const userInfo = useSelector((state) => state.user);
  const checkout = useSelector((state) => state.checkout);

  const handlePrevStep = () => {
    dispatch(prevStep());
  };

  const handleCheckout = () => {
    dispatch(checkoutStep());
  };

  return (
    <>
      <ConfirmData>CONFIRMA LOS DATOS DE ENVÍO:</ConfirmData>
      <UserInfo>
        <Desc>NOMBRE COMPLETO</Desc>
        <Info>{checkout.user.name + " " + checkout.user.surname}</Info>
        <Desc>EMAIL</Desc>
        <Info>{checkout.user.email}</Info>
        <Desc>TELÉFONO</Desc>
        <Info>{checkout.shipping.phone}</Info>
        <Desc>DIRECCIÓN DE ENTREGA</Desc>
        <Info>{checkout.shipping.address} </Info>
        <Desc>LOCALIDAD</Desc>
        <Info>
          {checkout.shipping.town + " - " + checkout.shipping.province}
        </Info>
        <Desc>TOTAL:</Desc>
        <Total>{cartInfo.total}€</Total>
      </UserInfo>
      <ButtonRow>
        <Button onClick={handlePrevStep}>Corregir</Button>
        <Button onClick={handleCheckout}>Finalizar compra</Button>
      </ButtonRow>
    </>
  );
};

export default StepTwo;
