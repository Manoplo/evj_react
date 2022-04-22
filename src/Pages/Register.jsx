import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, clearErrors } from "../app/slices/authSlice";
import { ArrowBackIosOutlined } from "@material-ui/icons";

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

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { errors } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(register(user));
  };

  const clearAndNavigate = () => {
    dispatch(clearErrors());
    navigate("/login");
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/login");
    }
  });

  return (
    <Container>
      <Wrapper>
        <Title>CREA UNA CUENTA</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Introduce tu nombre:</Label>
          <Input
            placeholder="nombre"
            type="text"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          {errors.name ? <Error>El nombre es obligatorio.</Error> : null}
          <Label>Introduce tus apellidos:</Label>
          <Input
            placeholder="apellidos"
            type="text"
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          />
          {errors.lastname ? (
            <Error>Al menos un apellido es obligatorio.</Error>
          ) : null}
          <Label>Introduce tu email de contacto:</Label>
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          {errors.email ? (
            <Error>
              El email ya existe en nuestra base de datos o es inválido.
            </Error>
          ) : null}
          <Label>Introduce tu contraseña:</Label>
          <Input
            placeholder="contraseña"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          {errors.password ? (
            <Error>La contraseña debe contener al menos 6 caracteres.</Error>
          ) : null}
          <Label>Confirma la contraseña:</Label>
          <Input
            placeholder="repetir contraseña"
            type="password"
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
          />
          {errors.confirmPassword ? (
            <Error>Las contraseñas no coinciden.</Error>
          ) : null}

          <Agreement>
            Al crear una cuenta, aceptas nuestros{" "}
            <a href="#">Términos y condiciones</a> y la{" "}
            <a href="#">Política de privacidad</a>
          </Agreement>
          <ButtonsContainer>
            <Button>CREAR CUENTA</Button>
            <Button onClick={clearAndNavigate}>
              <ArrowBackIosOutlined />
              VOLVER
            </Button>
          </ButtonsContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
