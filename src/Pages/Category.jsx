import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

import NavBarFixed from "../components/NavBarFixed";
import { ArrowBackIosOutlined } from "@material-ui/icons";

const Container = styled.div``;
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
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

const Button = styled.button`
  padding: 15px;
  border: 1px solid lightpink;
  min-width: 150px;
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
const ButtonContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const BreadCrumbs = styled.div`
  display: flex;
  margin: 20px 0 -50px 15px;
  font-size: 14px;
`;
const Crumb = styled.p`
  &:hover {
    font-weight: 700;
  }
`;

const Category = () => {
  const { categorySlug } = useParams();

  const [products, setProducts] = useState([]);
  const [criteria, setCriteria] = useState("");
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

  useEffect(() => {
    console.log(criteria, "Criteria changed");
  }, [criteria]);

  const handleCriteriaChange = (e) => {
    const newCriteria = e.target.value;
    switch (newCriteria) {
      case "newest":
        setProducts(products.sort((a, b) => b.id - a.id));
        break;
      case "oldest":
        setProducts(products.sort((a, b) => a.id - b.id));
        break;
      case "cheapest":
        setProducts(products.sort((a, b) => a.price - b.price));
        break;
      case "expensive":
        setProducts(products.sort((a, b) => b.price - a.price));
        break;
      default:
        setProducts(products);
    }

    setCriteria(newCriteria);
  };

  return (
    <Container>
      <NavBarFixed />

      <TitleContainer>
        <Title>{categorySlug}</Title>
      </TitleContainer>

      <FilterContainer>
        <BreadCrumbs>
          <Link to="/">
            <Crumb>Home</Crumb>
          </Link>
          <p>/</p>
          <Link to="/categorias">
            <Crumb>categorías</Crumb>
          </Link>
          <p>/</p>
          <Link to={"/categorias/" + categorySlug}>
            <Crumb>{categorySlug}</Crumb>
          </Link>
        </BreadCrumbs>
        <Filter>
          <FilterText>Ordenar productos:</FilterText>
          <Select onChange={handleCriteriaChange}>
            <Option selected={true} disabled="disabled">
              Elige un criterio
            </Option>
            <Option value="newest">Más nuevo</Option>
            <Option value="oldest">Más antiguo</Option>
            <Option value="expensive">Precio(más)</Option>
            <Option value="cheap">Precio(menos)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ButtonContainer>
        <Button onClick={() => navigate("/categorias")}>
          <ArrowBackIosOutlined />
          CATEGORÍAS
        </Button>
      </ButtonContainer>

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
