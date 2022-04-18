import Announcement from "../components/Announcement";
import styled from "styled-components";

import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import NavBarFixed from "../components/NavBarFixed";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <NavBarFixed />

      <FilterContainer>
        <Filter>
          <FilterText>Filtrar tallas:</FilterText>
          <Select>
            <Option disabled selected>
              Tamaños
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenar productos:</FilterText>
          <Select>
            <Option selected>Más nuevo</Option>
            <Option>Precio(más)</Option>
            <Option>Precio(menos)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
