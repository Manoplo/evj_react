import styled from "styled-components";
import { useState } from "react";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Sidebar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 9999;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: 0.5s all ease-in-out;
`;

const SidebarContainer = styled.div`
  position: absolute;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 100vh;
  background-color: white;
  /* border: 1px solid lightgray; */
  ${mobile({ width: "100vw" })}
`;

const Wrapper = styled.div`
  width: 80%;
  /*  border: 1px solid gray; */
  margin-top: 40px;
`;
const CloseButton = styled.div`
  font-weight: 800;
  font-size: 1.2rem;
  /* display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%; */
  cursor: pointer;
  /* background-color: #acacac; */
  color: #939393;
  margin-bottom: 30px;
`;

const CategoryLink = styled.h1`
  font-size: 3rem;
  font-weight: 100;
  color: #939393;
  font-family: "Urbanist", sans-serif;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #282828;
  }
`;

const SideBar = ({ open, onClick }) => {
  return (
    <Sidebar open={open}>
      <SidebarContainer>
        <Wrapper>
          <CloseButton onClick={onClick}>X</CloseButton>
          <Link to={"/categorias/vestidos"} onClick={onClick}>
            <CategoryLink>VESTIDOS</CategoryLink>
          </Link>
          <Link to={"/categorias/camisetas"} onClick={onClick}>
            <CategoryLink>CAMISETAS</CategoryLink>
          </Link>
          <Link to={"/categorias/pantalones"} onClick={onClick}>
            <CategoryLink>PANTALONES</CategoryLink>
          </Link>
          <Link to={"/categorias/faldas"} onClick={onClick}>
            <CategoryLink>FALDAS</CategoryLink>
          </Link>
          <Link to={"/categorias/accesorios"} onClick={onClick}>
            <CategoryLink>ACCESORIOS</CategoryLink>
          </Link>
        </Wrapper>
      </SidebarContainer>
    </Sidebar>
  );
};

export default SideBar;
