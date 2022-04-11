import styled from "styled-components";
import NavBarFixed from "../components/NavBarFixed";
import Footer from "../components/Footer";
import { ShoppingBasketOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem, selectItems } from "../app/slices/cartSlice";
import CheckoutContainer from "../components/checkout/CheckoutContainer";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  width: 80%;
  margin: 0 auto;
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
  padding: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  border: 1px solid lightpink;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: lightpink;
    color: white;
  }
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

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 20px 0;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  margin-bottom: 20px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightpink;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 20px;
`;
const ProductAmount = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin: 5px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 300;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;

  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (props.disabled === true ? "gray" : "black")};
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
const RemoveButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: white;
  color: black;
  font-weight: 600;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const NoProducts = styled.h1`
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  margin-top: 20vh;
  font-family: "Urbanist", sans-serif;
`;

const CheckoutContainerWrapper = styled.div`
  width: 25vw;
  min-height: 50vh;
  margin: 0 auto;
  border: 1px solid lightgray;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 13%;
  left: 35%;
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  ${mobile({
    width: "90vw",
    height: "100vh",
    top: "8%",
    left: "0",
  })}
`;

const Cart = () => {
  // BRINGS ITEMS FROM THE REDUX STORE
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [sendAmount, setSendAmount] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearItem = (item) => {
    dispatch(removeItem(item));
  };

  useEffect(() => {
    if (items.length > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [items]);

  useEffect(() => {
    setProducts([...items]);
  }, [items]);

  useEffect(() => {
    let totalAmount = 0;
    products.forEach((product) => {
      totalAmount += product.price;
    });
    setTotal(totalAmount);
  }, [products]);

  useEffect(() => {
    total < 70 && setSendAmount(3.5);
    products.length === 0 && setSendAmount(0);
  }, [total, products]);

  console.log(items);

  return (
    <Container>
      <NavBarFixed />
      {isCheckingOut && (
        <CheckoutContainerWrapper>
          <CheckoutContainer
            closeModal={(isCheckingOut) => setIsCheckingOut(isCheckingOut)}
            total={(total + sendAmount).toFixed(2)}
          />
        </CheckoutContainerWrapper>
      )}
      <Wrapper>
        <Title>CESTA DE LA COMPRA</Title>
        <Top>
          <TopButton onClick={() => navigate("/categorias")}>
            <ShoppingBasketOutlined />
            CONTINUA COMPRANDO
          </TopButton>
          <TopTexts>
            <TopText>Cesta de la compra({products.length})</TopText>
            <TopText>Lista de deseos(0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {products.length > 0 &&
              products.map((item) => (
                <>
                  <Product>
                    <ProductDetail>
                      <Image src={item.image} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {item.name}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {item.id}
                        </ProductId>
                        <ProductSize>
                          <b>Talla:</b> S
                        </ProductSize>
                        <RemoveButton onClick={() => clearItem(item)}>
                          QUITAR PRODUCTO
                        </RemoveButton>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <ProductAmount>{item.quantity}</ProductAmount>
                      </ProductAmountContainer>
                      <ProductPrice>{item.price}€</ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </>
              ))}
            {products.length === 0 && (
              <NoProducts> No hay productos en tu cesta</NoProducts>
            )}
          </Info>
          <Summary>
            <SummaryTitle>RESUMEN DEL PEDIDO</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{total.toFixed(2)}€</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Envío</SummaryItemText>
              <SummaryItemPrice>{sendAmount}€</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>TOTAL</SummaryItemText>
              <SummaryItemPrice>
                {(total + sendAmount).toFixed(2)}€
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <Button
                disabled={isButtonDisabled}
                onClick={() => setIsCheckingOut(true)}
              >
                {isButtonDisabled
                  ? "No hay productos en tu cesta"
                  : "COMPRAR AHORA"}
              </Button>
            </SummaryItem>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
