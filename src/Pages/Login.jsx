import { Lock } from "@material-ui/icons";

import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 99vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center;
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

const Link = styled.a`
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
  return (
    <Container>
      <Wrapper>
        <Title>ACCEDER</Title>
        <Form>
          <Label>Email:</Label>
          <Input placeholder="email" type="email" />
          <Label>Contraseña</Label>
          <Input placeholder="contraseña" type="password" />
          <Button>
            {" "}
            <Lock /> ACCEDER
          </Button>
          <Link>¿OLVIDASTE LA CONTRASEÑA?</Link>
          <Link>¿NO TIENES CUENTA?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
