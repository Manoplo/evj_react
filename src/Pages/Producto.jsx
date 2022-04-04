import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addItem } from "../app/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Add, Remove, ShoppingBasket } from "@material-ui/icons";
import { InnerImageZoom } from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import NavBarFixed from "../components/NavBarFixed";
import axios from "axios";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding: "0px",
  })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterSize = styled.select``;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  margin-top: 20px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 10px;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid lightpink;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid lightpink;
  background-color: white;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: lightpink;
    color: white;
  }
`;

const Producto = () => {
  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState(0);
  const [size, setSize] = useState("");
  const [product, setProduct] = useState({});

  const { productId, categorySlug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await axios.get(
          `http://elvestidordejulietta.test/api/v1/categories/${categorySlug}/${productId}`
        );

        setProduct(result.data);
        setTotal(result.data.price);
      } catch (error) {
        navigate(`/categorias/${categorySlug}`);
      }
    };

    fetchProduct();
  }, [productId, categorySlug]);

  const increaseAmount = () => {
    setAmount(amount + 1);
    setTotal(total + product.price);
  };
  const decreaseAmount = () => {
    if (amount < 2) return;

    setAmount(amount - 1);
    setTotal(total - product.price);
  };

  return (
    <Container>
      <NavBarFixed />

      <Wrapper>
        <ImgContainer>
          <InnerImageZoom src={product?.image} className="zoomed_image" />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.name}</Title>
          <Desc>{product?.description}</Desc>
          <Price>{total}€</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Talla</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={decreaseAmount} style={{ cursor: "pointer" }} />
              <Amount>{amount}</Amount>
              <Add onClick={increaseAmount} style={{ cursor: "pointer" }} />
            </AmountContainer>
          </AddContainer>
          <Button
            onClick={() =>
              dispatch(addItem({ ...product, quantity: amount, price: total }))
            }
          >
            {" "}
            <ShoppingBasket /> AÑADIR AL CARRITO
          </Button>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Producto;
