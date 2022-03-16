import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Footer = () => {
  const Container = styled.div`
    display: flex;
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;

  const Logo = styled.h1``;
  const Desc = styled.p`
    text-align: left;
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
  `;

  return (
    <Container>
      <Left>
        <Logo>EL VESTIDOR DE JULIETTA</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          totam laboriosam voluptas debitis provident ipsam asperiores libero
          voluptatem velit facilis, recusandae, est aspernatur iure nostrum enim
          ducimus. Iusto, quo laboriosam.
        </Desc>
        <SocialContainer>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Enlaces de interés</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Mujer</ListItem>
          <ListItem>Hombre</ListItem>
          <ListItem>Accesorios</ListItem>
          <ListItem>Mi Cuenta</ListItem>
          <ListItem>Carrito</ListItem>
          <ListItem>Lista de deseos</ListItem>
          <ListItem>Términos</ListItem>
        </List>
      </Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
