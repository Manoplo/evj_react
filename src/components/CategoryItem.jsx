import styled from "styled-components";

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
`;

const Button = styled.button`
  padding: 13px;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>COMPRAR AHORA</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
