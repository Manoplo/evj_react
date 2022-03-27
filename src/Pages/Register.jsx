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
  border: 1px solid lightpink;
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

  &:hover {
    background-color: lightpink;
    color: white;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREA UNA CUENTA</Title>
        <Form>
          <Label>Introduce tu nombre:</Label>
          <Input placeholder="nombre" type="text" />
          <Label>Introduce tus apellidos:</Label>
          <Input placeholder="apellidos" type="text" />
          <Label>Introduce tu email de contacto:</Label>
          <Input placeholder="email" type="email" />
          <Label>Introduce tu contraseña:</Label>
          <Input placeholder="contraseña" type="password" />
          <Label>Confirma la contraseña:</Label>
          <Input placeholder="repetir contraseña" type="password" />
          <Agreement>
            Al crear una cuenta, aceptas nuestros{" "}
            <a href="#">Términos y condiciones</a> y la{" "}
            <a href="#">Política de privacidad</a>
          </Agreement>
          <Button>CREAR CUENTA</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
