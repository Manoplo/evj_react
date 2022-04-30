import {
  AssessmentOutlined,
  CreditCardOutlined,
  Dashboard,
  ExitToApp,
  Group,
  Loyalty,
  Settings,
  ShopOutlined,
  SlideshowOutlined,
  StorefrontOutlined,
  Subscriptions,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  border-right: 0.5px solid lightgray;
  min-height: 100vh;
  background-color: white;
`;

const Top = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;
const Center = styled.div`
  padding-left: 10px;
`;
const Bottom = styled.div`
  padding-left: 10px;
  display: flex;
  gap: 10px;
`;
const Logo = styled.h1`
  font-size: 50px;
  color: #2b2b2b;
  font-weight: 600;
`;

const Hr = styled.hr`
  height: 0;
  border: 0.5px solid lightgray;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  gap: 10px;
  transition: all 0.2s ease-in-out;
  font-size: 18px;
  margin-bottom: 10px;

  &:hover {
    background-color: #ffc4cd;
    color: white;
  }
`;

const Section = styled.p`
  font-size: 10px;
  font-weight: 600;
  color: #999;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const ColorOptionOne = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid lightgray;
  cursor: pointer;
  margin-top: 10px;
`;
const ColorOptionTwo = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #202020;
  border: 1px solid lightgray;
  cursor: pointer;
  margin-top: 10px;
`;

const Sidebar = () => {
  return (
    <Container>
      <Top>
        <Logo>ELV</Logo>
      </Top>
      <Hr />
      <Center>
        <List>
          <Section>PRINCIPAL</Section>
          <ListItem>
            <Dashboard /> Dashboard
          </ListItem>
          <Section>LISTADOS</Section>
          <ListItem>
            <Group />
            Usuarios
          </ListItem>
          <ListItem>
            <StorefrontOutlined />
            Productos
          </ListItem>
          <ListItem>
            <CreditCardOutlined />
            Pedidos
          </ListItem>
          <ListItem>
            <Loyalty />
            Suscritos
          </ListItem>
          <Section>UTILES</Section>
          <ListItem>
            <SlideshowOutlined />
            Diapositivas
          </ListItem>
          <ListItem>
            <AssessmentOutlined />
            Estadísticas
          </ListItem>
          <ListItem>
            <Settings />
            Opciones
          </ListItem>
          <ListItem>
            <ExitToApp />
            Salir
          </ListItem>
        </List>
        <Section>OPCIONES DE COLOR</Section>
      </Center>
      <Bottom>
        <ColorOptionOne></ColorOptionOne>
        <ColorOptionTwo></ColorOptionTwo>
      </Bottom>
    </Container>
  );
};

export default Sidebar;