import { ArrowBackIosOutlined, Lock } from "@material-ui/icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, clearErrors } from "../app/slices/authSlice";

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
  border: none;
  border-bottom: 1px solid lightgray;

  &:focus {
    outline: none;
    border-bottom: 2px solid lightpink;
  }
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

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
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

const WelcomeMessage = styled.span`
  color: lightpink;
  font-size: 15px;
  font-weight: 700;
`;

const Error = styled.p`
  color: tomato;
  font-size: 12px;
  font-style: italic;
  margin-top: -5px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const resetPass = localStorage.getItem("restore");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* const { isLoggedIn } = useSelector((state) => state.auth); */
  const auth = useSelector((state) => state.auth);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogin = (e) => {
    e.preventDefault();

    const form = {
      email: email,
      password: password,
    };

    dispatch(login(form));
  };

  const clearAndNavigate = () => {
    dispatch(clearErrors());
    navigate("/");
  };

  useEffect(() => {
    if (
      auth.isLoggedIn &&
      user &&
      user.accessToken &&
      user.accessToken !== ""
    ) {
      navigate("/");
    }
  });

  useEffect(() => {
    if (resetPass) {
      setResetMessage(
        "La contraseña ha sido actualizada con éxito. Ya puedes acceder de nuevo."
      );
      localStorage.removeItem("restore");
    }
  }, []);

  /*  dispatch(login(email, password)); */

  return (
    <Container>
      <Wrapper>
        {auth?.user?.message && (
          <WelcomeMessage> {auth?.user?.message}</WelcomeMessage>
        )}
        {resetMessage && <WelcomeMessage>{resetMessage}</WelcomeMessage>}
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
          {auth?.errors?.message && <Error>{auth?.errors.message}</Error>}
          <ButtonsContainer>
            <Button type="submit">
              {" "}
              <Lock /> ACCEDER
            </Button>
            <Button onClick={clearAndNavigate}>
              {" "}
              <ArrowBackIosOutlined /> VOLVER
            </Button>
          </ButtonsContainer>
          <LinkStyle>
            <Link to={"/forgot-password"}>¿OLVIDASTE LA CONTRASEÑA?</Link>
          </LinkStyle>
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
