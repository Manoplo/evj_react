import styled from "styled-components";
import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import { Add, Remove, ShoppingBasket } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
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
  return (
    <Container>
      <NavBar />
      <Announcement />

      <Wrapper>
        <ImgContainer>
          <Img
            src="https://images.pexels.com/photos/3661622/pexels-photo-3661622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="producto"
          />
        </ImgContainer>
        <InfoContainer>
          <Title>Lorem</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            recusandae iusto laboriosam quis veritatis quasi vero laudantium
            nulla, architecto nobis omnis. In numquam quidem incidunt pariatur
            porro quo nemo dicta.
          </Desc>
          <Price>20€</Price>
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
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
          </AddContainer>
          <Button>
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
