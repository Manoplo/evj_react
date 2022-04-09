import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { stepTwo } from "../../app/slices/checkoutSlice";

const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;

const StepOne = (props) => {
  /* const userData = JSON.parse(localStorage.getItem("user")) ?? null;
  console.log(userData); */

  const [user, setUser] = useState(null);
  const [shipping, setShipping] = useState(null);
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.checkout);
  console.log(userInfo);

  const handleOrderInformation = (e) => {
    dispatch(stepTwo({ user, shipping }));
  };

  useEffect(() => {
    // If user exists, api call to retrieve shipment info.
  }, []);

  return (
    <>
      <div>INTRODUCE TUS DATOS DE ENVÍO</div>

      <Input
        type="text"
        placeholder="Nombre"
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      />
      <Input
        type="text"
        placeholder="Apellidos"
        onChange={(e) => {
          setUser({ ...user, surname: e.target.value });
        }}
      />
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <Input
        type="phone"
        placeholder="Teléfono"
        onChange={(e) => {
          setShipping({ ...shipping, phone: e.target.value });
        }}
      />
      <Input
        type="text"
        placeholder="Dirección"
        onChange={(e) => {
          setShipping({ ...shipping, address: e.target.value });
        }}
      />
      <Input
        type="text"
        placeholder="Código Postal"
        onChange={(e) => {
          setShipping({ ...shipping, cp: e.target.value });
        }}
      />
      <Input
        type="text"
        placeholder="Localidad"
        onChange={(e) => {
          setShipping({ ...shipping, town: e.target.value });
        }}
      />
      <Input
        type="text"
        placeholder="Provincia"
        onChange={(e) => {
          setShipping({ ...shipping, province: e.target.value });
        }}
      />
      <Button onClick={handleOrderInformation}>Siguiente</Button>
    </>
  );
};

export default StepOne;
