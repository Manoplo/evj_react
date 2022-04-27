import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`;

const Error = styled.h1`
  font-size: 50px;
`;

const NotFound = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    let countDown = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(countDown);
    };
  }, []);

  return (
    <Wrapper>
      <Error>Ooops! Error 404</Error>
      <p> La página que buscas no existe o ha sido movida a otra parte.</p>
      <span>
        Te vamos a redirigir a la página principal en <b>{seconds}</b> segundos.
      </span>
    </Wrapper>
  );
};

export default NotFound;
