import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 4rem;
  color: white;
  font-weight: bold;
  ${mobile({
    fontSize: "2rem",
  })}
`;

const Button = styled.button`
  padding: 13px;
  border: none;
  cursor: pointer;
  color: gray;
  font-size: 1.5rem;

  &:hover {
    background-color: #f5f5f5;
    color: black;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Title>{item.name}</Title>

        <Link to={`/categorias/${item.slug}`}>
          <Button>IR A CATEGORÍA</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
