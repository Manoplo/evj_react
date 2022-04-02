import { Badge, Menu } from "@material-ui/core";
import { MenuOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import SideBar from "./SideBar";

const Container = styled.div`
  height: 80px;
  ${mobile({ height: "50px" })}
  position: fixed;
  top: 0;
  width: 100%;
  background-color: transparent;
  z-index: 100;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 60px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-family: "Bodoni Moda", serif;
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const MenuContainer = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 60px;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <SideBar open={open} onClick={() => setOpen(!open)} />
        <Left>
          <MenuContainer>
            <MenuOutlined onClick={() => setOpen(!open)} />
          </MenuContainer>
        </Left>
        <Center>
          <Logo>EVJ</Logo>
        </Center>
        <Right>
          <Link to={"/login"}>
            <MenuItem>INICIAR SESIÓN</MenuItem>
          </Link>
          <MenuItem>
            <Link to={"/cart"}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

/* const SideBar = () => {
  return <h1>Sidebar</h1>;
};
 */
export default Navbar;
