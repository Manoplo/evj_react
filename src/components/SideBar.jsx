import styled from "styled-components";
import { useState } from "react";
import { mobile } from "../responsive";

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 100;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: 0.5s all ease-in-out;
`;

const SidebarContainer = styled.div`
  width: 30vw;
  height: 100vh;
  background-color: white;
  border: 1px solid lightgray;
  ${mobile({ width: "100vw" })}
`;

const SideBar = ({ open, onClick }) => {
  return (
    <Sidebar open={open}>
      <SidebarContainer>
        <div onClick={onClick}>X</div>
      </SidebarContainer>
    </Sidebar>
  );
};

export default SideBar;
