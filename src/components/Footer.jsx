import {
  Facebook,
  Instagram,
  Twitter,
  MapOutlined,
  PhoneIphone,
  EmailOutlined,
  Copyright,
} from "@material-ui/icons";

import styled from "styled-components";
import { mobile } from "../responsive";
import Payment from "../assets/payment.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: #fbfbfb;
  padding: 50px 0;
  ${mobile({
    padding: "0px",
  })}
`;

const CopyContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;

  display: flex;
  margin: 0 auto;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Logo = styled.h1`
  ${mobile({
    fontSize: "24px",
  })}
`;
const Desc = styled.p`
  text-align: center;
  margin-top: -20px;
`;

const PaymentImg = styled.img`
  margin-top: -10px;
  margin-bottom: 10px;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3``;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    padding: "0 20px 20px 20px",
    marginTop: "-20px",
  })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo>EL VESTIDOR DE JULIETTA</Logo>
            <Desc>Métodos de pago:</Desc>
            <PaymentImg src={Payment} width="50%" alt="payment" />
            <SocialContainer>
              <SocialIcon color="E4405F">
                <a
                  href="https://www.instagram.com/julietta_ceo/?hl=es"
                  target={"_blank"}
                >
                  {" "}
                  <Instagram />
                </a>
              </SocialIcon>
              <SocialIcon color="3B5999">
                <a
                  href="https://www.facebook.com/juliettariva"
                  target={"_blank"}
                >
                  <Facebook />
                </a>
              </SocialIcon>
              <SocialIcon color="55ACEE">
                <Twitter />
              </SocialIcon>
            </SocialContainer>
          </Left>
          <Center>
            <Title>Enlaces de interés</Title>
            <List>
              <ListItem>
                <Link to="/">Inicio</Link>
              </ListItem>
              <ListItem>
                <Link to="/categorias">Categorías</Link>
              </ListItem>
              <ListItem>
                <Link to="/cart">Carrito</Link>
              </ListItem>
              <ListItem>
                <Link to="/politicas-privacidad">Políticas de privacidad</Link>
              </ListItem>
              <ListItem>
                <Link to="/profile">Mi cuenta</Link>
              </ListItem>
              <ListItem>
                <Link to="/registro">Crear cuenta</Link>
              </ListItem>
              <ListItem>
                <Link to="/whishlist">Lista de deseos</Link>
              </ListItem>
              <ListItem>
                <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
              </ListItem>
            </List>
          </Center>
          <Right>
            <Title>Contacto</Title>
            <ContactItem>
              <MapOutlined />
              Av. de Arcos, Bloque 2, Local 4, 11405 - Jerez de la Frontera
              (Cádiz)
            </ContactItem>
            <ContactItem>
              <PhoneIphone />
              699 25 85 68
            </ContactItem>
            <ContactItem>
              <EmailOutlined />
              elvestidordejulietta.shop@gmail.com
            </ContactItem>
          </Right>
        </Wrapper>
      </Container>
      <CopyContainer>
        <Copyright /> El Vestidor de Julietta {new Date().getFullYear()}
      </CopyContainer>
    </>
  );
};

export default Footer;
