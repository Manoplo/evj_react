import { Lock } from "@material-ui/icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../app/slices/authSlice";
import authService from "../services/auth.service";

import axios from "axios";

const Container = styled.div`
  height: 100vh;
  width: 99vw;
  /*  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center; */
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
  width: 20%;
  background-color: white;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Label = styled.label``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid lightpink;
`;

const LinkStyle = styled.span`
  text-decoration: underline;
  color: black;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    color: lightpink;
  }
`;

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = {
      email: email,
      password: password,
    };

    dispatch(login(form));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  });

  /*  dispatch(login(email, password)); */

  return (
    <Container>
      <Wrapper>
        <Title>ACCEDER</Title>
        <Form onSubmit={handleLogin}>
          <Label>Email:</Label>
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Contraseña</Label>
          <Input
            placeholder="contraseña"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">
            {" "}
            <Lock /> ACCEDER
          </Button>
          <LinkStyle>¿OLVIDASTE LA CONTRASEÑA?</LinkStyle>
          <LinkStyle>
            {" "}
            <Link to={"/registro"}>¿NO TIENES CUENTA?</Link>{" "}
          </LinkStyle>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
