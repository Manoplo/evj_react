import {
  AssessmentOutlined,
  CreditCardOutlined,
  Dashboard,
  ExitToApp,
  Group,
  Loyalty,
  PersonOutline,
  Settings,
  ShopOutlined,
  SlideshowOutlined,
  StorefrontOutlined,
  Subscriptions,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logout } from "../../app/slices/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Container = styled.div`
  flex: 1;
  border-right: 0.5px solid lightgray;
  min-height: 100vh;
  background-color: ${(props) => (props.darkMode ? "#2f2f2f" : "white")};
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
  color: ${(props) => (props.darkMode ? "white" : "black")};
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
    background-color: ${(props) => (props.darkMode ? "#2f2f2f" : "lightpink")};
    color: white;
  }

  & a {
    color: ${(props) => (props.darkMode ? "white" : "black")};
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
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.admin);
  const [darkMode, setDarkMode] = useState(false);

  const changeToWhite = () => {
    localStorage.removeItem("darkMode");
    setDarkMode(false);
  };

  const changeToDark = () => {
    localStorage.setItem("darkMode", true);
    setDarkMode(true);
  };

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const handleLogout = () => {
    if (!isLoggedIn) return;
    dispatch(logout());
  };

  return (
    <Container darkMode={darkMode}>
      <Top>
        <Logo darkMode={darkMode}>ELV</Logo>
      </Top>
      <Hr />
      <Center>
        <List>
          <Section>PRINCIPAL</Section>
          <ListItem darkMode={darkMode}>
            <Dashboard />
            <Link to="/admin/dashboard">Dashboard</Link>
          </ListItem>
          <Section>LISTADOS</Section>
          <ListItem darkMode={darkMode}>
            <Group />
            <Link to="/admin/dashboard/users">Usuarios</Link>
          </ListItem>
          <ListItem darkMode={darkMode}>
            <PersonOutline />
            <Link to="/admin/dashboard/uusers">Usuarios no registrados</Link>
          </ListItem>
          <ListItem darkMode={darkMode}>
            <StorefrontOutlined />
            <Link to="/admin/dashboard/products">Productos</Link>
          </ListItem>
          <ListItem darkMode={darkMode}>
            <CreditCardOutlined />
            <Link to="/admin/dashboard/orders">Pedidos</Link>
          </ListItem>
          <ListItem darkMode={darkMode}>
            <Loyalty />
            <Link to="/admin/dashboard/subscriptions">Suscritos</Link>
          </ListItem>
          <Section>UTILES</Section>
          <ListItem darkMode={darkMode}>
            <SlideshowOutlined />
            <Link to="/admin/dashboard/sliders">Diapositivas</Link>
          </ListItem>
          <ListItem darkMode={darkMode}>
            <AssessmentOutlined />
            <Link to="/admin/dashboard/stats">Estadísticas</Link>
          </ListItem>
          <ListItem darkMode={darkMode}>
            <Settings />
            <Link to="/admin/dashboard/options">Opciones</Link>
          </ListItem>
          <ListItem onClick={handleLogout} darkMode={darkMode}>
            <ExitToApp />
            Salir
          </ListItem>
        </List>
        <Section>OPCIONES DE COLOR</Section>
      </Center>
      <Bottom>
        <ColorOptionOne onClick={changeToWhite}></ColorOptionOne>
        <ColorOptionTwo onClick={changeToDark}></ColorOptionTwo>
      </Bottom>
    </Container>
  );
};

export default Sidebar;
