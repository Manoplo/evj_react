import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

import NavBarFixed from "../components/NavBarFixed";

const Container = styled.div``;
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  margin: 0 auto;
`;
const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  width: 92%;
  margin: 0 auto;
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

const LoaderContainer = styled.div`
  width: 80vw;
  height: 50vh;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoaderTitle = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  font-family: "Urbanist", sans-serif;
`;

const Category = () => {
  const { categorySlug } = useParams();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `http://elvestidordejulietta.test/api/v1/categories/${categorySlug}`
        );
        setProducts(result.data);
        setLoading(false);
      } catch (error) {
        navigate("/categorias");
      }
    };
    fetchData();
  }, [categorySlug]);

  return (
    <Container>
      <NavBarFixed />
      <TitleContainer>
        <Title>{categorySlug}</Title>
      </TitleContainer>

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
      {loading ? (
        <LoaderContainer>
          <PropagateLoader color={"#e491b8"} />
          <LoaderTitle>Cargando...</LoaderTitle>
        </LoaderContainer>
      ) : (
        <Products products={products} />
      )}
      {/* PRODUCTS END HERE */}
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Category;
