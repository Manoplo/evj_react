import { Send } from "@material-ui/icons";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({
    paddingBottom: "30px",
  })}
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;

  ${mobile({
    fontSize: "35px",
    marginTop: "50px",
  })}
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({
    fontSize: "14px",
  })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
`;
const Button = styled.button`
  flex: 1;
  background-color: #ff6d83;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fa425e;
  }
`;

const Message = styled.p`
  color: tomato;
  font-size: 16px;
`;

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      setMessage("Enviando...");
      const response = await axios.post(
        "http://167.99.221.113/api/v1/newsletter",
        {
          email: email,
        }
      );
      console.log(response);
      if (response.status === 201) {
        setMessage("¡Gracias por suscribirte!");
      } else {
        setMessage("El email ya esta registrado o no es un email válido.");
      }

      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Toaster />
      <Title>NewsLetter</Title>
      <Description>
        ¡Únete a nuestra newsletter para obtener ofertas exclusivas!
      </Description>
      <InputContainer>
        <Input
          placeholder="Introduce tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={() => handleSubmit()}>
          <Send />
        </Button>
      </InputContainer>
      {message && <Message>{message}</Message>}
    </Container>
  );
};

export default NewsLetter;
