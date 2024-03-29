import { Badge } from "@material-ui/core";
import {
  PermIdentityOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItems } from "../app/slices/cartSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { logout } from "../app/slices/authSlice";
import SideBar from "./SideBar";

const Container = styled.div`
  height: 80px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  /*  padding: 10px 20px; */
  position: fixed;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  /* ${mobile({ padding: "10px 0px" })} */
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
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 40px;
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

const NavBarFixed = () => {
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
          <Logo>
            <Link to={"/"}>
              {" "}
              <span className="logo">EVJ</span>{" "}
            </Link>
          </Logo>
        </Center>
        <Right>
          {isLoggedIn ? (
            <>
              <MenuItem>
                <Link to="/profile">
                  <PermIdentityOutlined />
                </Link>
              </MenuItem>

              <MenuItem onClick={handleLogout}>SALIR</MenuItem>
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

export default NavBarFixed;
