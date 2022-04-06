import { Badge, Menu } from "@material-ui/core";
import {
  MenuOutlined,
  PermIdentityOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../app/slices/cartSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import SideBar from "./SideBar";
import { logout } from "../app/slices/authSlice";

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
  margin-top: 5px;
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
  margin-bottom: -20px;
  margin-top: 5px;
  ${mobile({ fontSize: "24px", marginBottom: "0" })}
`;

const SubLogo = styled.span`
  font-size: 13px;
  margin-bottom: -200px;
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-family: "Urbanist", serif;
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
  const numberOfItems = useSelector(selectItems).length;
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleLogout = () => {
    if (!isLoggedIn) {
      return;
    }
    dispatch(logout());
  };

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
          <SubLogo>El vestidor de Julietta</SubLogo>
        </Center>
        <Right>
          {isLoggedIn ? (
            <>
              <MenuItem>
                <PermIdentityOutlined />
              </MenuItem>

              <MenuItem onClick={handleLogout}>
                {" "}
                <span className="logo">SALIR</span>{" "}
              </MenuItem>
            </>
          ) : (
            <Link to={"/login"}>
              <MenuItem>
                {" "}
                <span className="logo">INICIAR SESIÓN</span>
              </MenuItem>
            </Link>
          )}
          <MenuItem>
            <Link to={"/cart"}>
              <Badge badgeContent={numberOfItems} color="primary">
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
