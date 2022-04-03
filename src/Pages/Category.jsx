import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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

const Category = () => {
  const { categorySlug } = useParams();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `http://elvestidordejulietta.test/api/v1/categories/${categorySlug}`
        );
        setProducts(result.data);
      } catch (error) {
        navigate("/categorias");
      }
    };
    fetchData();
  }, [categorySlug]);

  return (
    <Container>
      <NavBarFixed />

      <Title>{categorySlug}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar productos:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Oscuros</Option>
            <Option>Claros</Option>
            <Option>Estampados</Option>
          </Select>
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
      {/* PRODUCTS HERE */}
      <Products products={products} />
      {/* PRODUCTS END HERE */}
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Category;
