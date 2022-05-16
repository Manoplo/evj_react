import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import {
  Bookmarks,
  PermIdentityOutlined,
  ShoppingBasketOutlined,
} from "@material-ui/icons";

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
  ${mobile({ width: "100vw", overflowY: "auto" })}
`;

const Wrapper = styled.div`
  width: 80%;
  /*  border: 1px solid gray; */
  margin-top: 40px;
`;
const CloseButton = styled.div`
  font-weight: 800;
  font-size: 1.2rem;

  cursor: pointer;

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

const Search = styled.div`
  border-bottom: 1px solid black;
  font-weight: 600;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", alignItems: "flex-start", gap: "30px" })}
`;

const BottomItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #939393;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #282828;
  }
`;

const InfoColumn = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const InfoItem = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: #afafaf;
  font-family: "Urbanist", sans-serif;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #282828;
  }
`;

const SideBar = ({ open, onClick }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Sidebar open={open}>
      <SidebarContainer>
        <Wrapper>
          <CloseButton onClick={onClick}>X</CloseButton>
          <Link to={"/search"} onClick={onClick}>
            <Search>BUSCAR</Search>
          </Link>
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
          <Link to={"/categorias/calzado"} onClick={onClick}>
            <CategoryLink>CALZADO</CategoryLink>
          </Link>
          <Link to={"/categorias/accesorios"} onClick={onClick}>
            <CategoryLink>ACCESORIOS</CategoryLink>
          </Link>
          <BottomRow>
            <BottomItem>
              {user ? (
                <>
                  <PermIdentityOutlined />
                  <Link to={"/profile"} onClick={onClick}>
                    MI PERFIL
                  </Link>
                </>
              ) : (
                <Link to={"/login"} onClick={onClick}>
                  INICIAR SESIÓN
                </Link>
              )}
            </BottomItem>
            <BottomItem>
              <ShoppingBasketOutlined />
              <Link to={"/cart"} onClick={onClick}>
                CESTA DE LA COMPRA
              </Link>
            </BottomItem>
            <BottomItem>
              {user && (
                <>
                  <Bookmarks />
                  <Link to={"/whishlist"} onClick={onClick}>
                    LISTA DE DESEOS
                  </Link>
                </>
              )}
            </BottomItem>
          </BottomRow>

          <InfoColumn>
            <Link to={"/terminos-y-condiciones"} onClick={onClick}>
              <InfoItem>Términos y condiciones</InfoItem>
            </Link>
            <Link to={"/politicas-privacidad"} onClick={onClick}>
              <InfoItem>Política de privacidad</InfoItem>
            </Link>

            <Link to={"/cookies"} onClick={onClick}>
              <InfoItem>Política de cookies</InfoItem>
            </Link>
            <Link to={"/acerca"} onClick={onClick}>
              <InfoItem>Sobre el Vestidor de Julietta</InfoItem>
            </Link>
          </InfoColumn>
        </Wrapper>
      </SidebarContainer>
    </Sidebar>
  );
};

export default SideBar;
