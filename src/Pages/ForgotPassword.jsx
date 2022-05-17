import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, clearErrors } from "../app/slices/authSlice";
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

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setError(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://167.99.221.113/api/v1/password/email",
        {
          email: email,
        }
      );

      console.log(response);

      if (response.status === 200) {
        navigate("/reset-password");
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }

    console.log(email);
  };

  return (
    <Container>
      <Wrapper>
        <Title>RECUPERACIÓN DE CONTRASEÑA</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Introduce tu email de contacto:</Label>
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <Error>Introduce un email válido</Error>}
          <ButtonsContainer>
            <Button type="submit">ENVIAR</Button>
            <Button onClick={() => navigate("/login")}>
              <ArrowBackIosOutlined />
              VOLVER
            </Button>
          </ButtonsContainer>
        </Form>
        <Agreement>
          Introduce el email vinculado a tu cuenta. Te enviaremos un código que
          deberás introducir en la siguiente pantalla junto con tu nueva
          contraseña.
        </Agreement>
      </Wrapper>
    </Container>
  );
};

export default ForgotPassword;
