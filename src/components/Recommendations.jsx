import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const Container = styled.div`
  width: 80%;
  margin: -80px auto 100px;
  ${mobile({
    margin: "20px auto",
  })}
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${mobile({
    marginBottom: "20px",
  })}
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 200;
  font-family: "Urbanist", sans-serif;
  ${mobile({
    fontSize: "20px",
    textAlign: "center",
  })}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  height: 30vh;

  gap: 10px;
  ${mobile({
    width: "100%",
    height: "auto",
    /* gap: "20px", */
    justifyContent: "center",
  })}
`;

const ImageWrapper = styled.div`
  width: 24%;
  height: 100%;
  ${mobile({
    width: "60%",
  })}

  transition: all 0.2s ease-in-out;

  &:hover {
    /* box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.4); */
    /* outline: 0.5px solid lightpink; */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Recommendations = ({ recommendations }) => {
  return (
    <Container>
      <TitleContainer>
        <BsBag />
        <Title>COMPLETA TU LOOK</Title>
      </TitleContainer>
      <Wrapper>
        {recommendations.map((recommendation) => (
          <ImageWrapper>
            <Link
              to={`/categorias/${recommendation.category.slug}/${recommendation.id}`}
            >
              <Image src={recommendation.image} alt={recommendation.name} />
            </Link>
          </ImageWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Recommendations;
