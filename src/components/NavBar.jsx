import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { MenuItem, Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { mobile } from "../responsive.js";

/**
 * STYLED COMPONENTS
 */

const Container = styled.nav`
  height: 80px;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "10px 0px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px",
  })}
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 2rem;

  ${mobile({
    fontSize: "24px",
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

/**
 *
 * @param {*} param
 * @returns JSX Element
 */

export default function NavBar({}) {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Buscar en la tienda..." />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>EL VESTIDOR DE JULIETTA</Logo>
        </Center>
        <Right>
          <Link to="/registro">
            <MenuItem>REGISTRARSE</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>INICIAR SESIÓN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem style={{ height: "45px" }}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}
