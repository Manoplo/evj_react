import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { mobile } from "../responsive";
import axios from "axios";
import styled from "styled-components";
import Lottie from "lottie-react";
import success from "../lotties/success.json";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-top: -200px;
`;

const Message = styled.h2`
  margin-top: -150px;
  ${mobile({
    fontSize: "1.5rem",
  })}
`;
const Advice = styled.p``;

const style = {
  height: "500px",
  width: "500px",
};

const Success = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    // Si no existe el user auth en el localstorage, mandamos el objeto userInfo y se almacena en un endpoint para usuarios no registrados
    if (!user) {
      axios
        .post(
          "http://elvestidordejulietta.test/api/v1/orders/unregistered",
          userInfo
        )
        .then((res) => {
          console.log(res.data);
          localStorage.removeItem("userInfo");
          setTimeout(() => {
            navigate("/");
          }, 6000);
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    } else {
      axios
        .post("http://elvestidordejulietta.test/api/v1/orders", userInfo)
        .then((res) => {
          console.log(res.data);
          localStorage.removeItem("userInfo");
          setTimeout(() => {
            navigate("/");
          }, 6000);
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    }
  }, []);

  return (
    <>
      <Wrapper>
        <Lottie animationData={success} style={style} />
        <Message>
          ¡Compra realizada con éxito! Hemos enviado un mensaje a tu correo
          electrónico con los datos de la compra.{" "}
        </Message>
        <Advice>
          Espera mientras procesamos los datos antes de cerrar esta pestaña. Te
          redigiremos enseguida.
        </Advice>
      </Wrapper>
    </>
  );
};

export default Success;
