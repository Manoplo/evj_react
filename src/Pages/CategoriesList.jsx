import Announcement from "../components/Announcement";
import styled from "styled-components";

import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Categories from "../components/Categories";
import NavBarFixed from "../components/NavBarFixed";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 20px auto;
`;

const BreadCrumbs = styled.div`
  display: flex;
  margin: 20px 0 0px 0px;
  font-size: 14px;
`;
const Crumb = styled.p`
  &:hover {
    font-weight: 700;
  }
`;

const CategoriesList = () => {
  return (
    <Container>
      <NavBarFixed />

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
        </BreadCrumbs>
      </FilterContainer>
      <Categories />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default CategoriesList;
