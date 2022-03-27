import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  background-color: tomato;
`;

const Image = styled.img`
  width: 100%;
`;
const Product = styled.div``;
const ProductDetail = styled.div``;
const Details = styled.div``;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;

const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>TU CARRO</Title>
        <Top>
          <TopButton>CONTINUA COMPRANDO</TopButton>
          <TopTexts>
            <TopText>Bolsa de la compra(2)</TopText>
            <TopText>Lista de deseos(0)</TopText>
          </TopTexts>
          <TopButton type="filled">REALIZAR COMPRA</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80" />
                <Details>
                  <ProductName>
                    <b>Product:</b> TRAJE CORTO
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 37
                  </ProductId>
                  <ProductSize>
                    <b>Talla:</b> S
                  </ProductSize>
                </Details>
              </ProductDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
