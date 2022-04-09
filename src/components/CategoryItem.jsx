import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  /* flex: 1; */
  margin: 3px;
  width: 32%;
  height: 70vh;
  position: relative;
  margin-bottom: 15px;
  ${mobile({
    width: "100%",
    height: "100%",
    flex: 1,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
  })}
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
  color: #ffdcdc;
  font-weight: bold;
  ${mobile({
    fontSize: "3rem",
  })}
`;

const Button = styled.button`
  padding: 13px;
  border: none;
  cursor: pointer;
  color: gray;
  font-size: 1.5rem;
  transition: all 0.2s ease;
  &:hover {
    background-color: #f5f5f5;
    color: #ff6d83;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Title>{item.name}</Title>

        <Link to={`/categorias/${item.slug}`}>
          <Button>VER AHORA</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
