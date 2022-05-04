import { ArrowBackIosOutlined, Lock, VerifiedUser } from "@material-ui/icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../app/slices/adminSlice";

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
  font-size: 28px;
  font-weight: 200;
  font-family: "Urbanist", sans-serif;
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

const Error = styled.p`
  color: tomato;
  font-size: 12px;
  font-style: italic;
  margin-top: -5px;
`;

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.admin);
  const adminState = useSelector((state) => state.admin);

  const admin = JSON.parse(sessionStorage.getItem("admin"));

  const handleLogin = (e) => {
    e.preventDefault();

    const form = {
      email: email,
      password: password,
    };

    dispatch(login(form));
  };

  const clearAndNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    if (
      adminState.isLoggedIn &&
      admin &&
      admin.accessToken &&
      admin.accessToken !== ""
    ) {
      navigate("/admin/dashboard");
    }
  });

  /*  dispatch(login(email, password)); */

  return (
    <Container>
      <Wrapper>
        <Title>
          <VerifiedUser />
          Admin Login
        </Title>
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

          {adminState?.errors?.message && (
            <Error>{adminState.errors.message}</Error>
          )}
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
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AdminLogin;
