import styled from "styled-components";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { ArrowBackIosOutlined } from "@material-ui/icons";
import axios from "axios";

const Container = styled.div`
  height: 100vh;
  width: 99vw;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 200;
`;

const Wrapper = styled.div`
  padding: 40px;
  background-color: white;
`;

const Label = styled.label``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid lightgray;

  &:focus {
    outline: none;
    border-bottom: 2px solid lightpink;
  }
`;

const Agreement = styled.p``;

const Button = styled.button`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid lightpink;
  background-color: white;
  cursor: pointer;
  max-width: 40%;
  font-weight: 700;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  &:hover {
    background-color: lightpink;
    color: white;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Error = styled.p`
  color: tomato;
  font-size: 12px;
  font-style: italic;
  margin-top: -5px;
`;

const InnerLinks = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(false);
    setErrorMessage("");
    setPasswordMessage("");

    console.log(password, confirmPassword, code);
    if (password === "" || confirmPassword === "" || code === "") {
      setError(true);
      setErrorMessage("Todos los campos son requeridos");
      return;
    }

    if (password !== confirmPassword) {
      setError(true);
      setPasswordMessage("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await axios.post(
        "https://www.elvestidordejuliettaapi.tk/api/v1/password/reset",
        {
          code: code,
          password: password,
        }
      );

      console.log(response);

      if (response.status === 200) {
        localStorage.setItem(
          "restore",
          "Contraseña actualizada con éxito. Ahora puedes acceder."
        );
        navigate("/login");
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }

    console.log();
  };

  return (
    <Container>
      <Wrapper>
        <Title>CAMBIO DE CONTRASEÑA</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Introduce el código que te hemos enviado.</Label>
          <Input
            placeholder="Código"
            type="text"
            onChange={(e) => setCode(e.target.value)}
          />

          <Label>Introduce la nueva contraseña</Label>
          <Input
            placeholder="Nueva contraseña"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Label>Confirma la contraseña</Label>
          <Input
            placeholder="Confirma contraseña"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorMessage !== "" && <Error>{errorMessage}</Error>}
          {passwordMessage !== "" && <Error>{passwordMessage}</Error>}
          <ButtonsContainer>
            <Button type="submit">CAMBIAR CONTRASEÑA</Button>
            <Button onClick={() => navigate("/login")}>
              <ArrowBackIosOutlined />
              VOLVER
            </Button>
          </ButtonsContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ResetPassword;
