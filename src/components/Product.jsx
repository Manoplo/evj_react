import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 420px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    transform: scale(1.1);
  }
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 75%;
  position: absolute;
  top: 44px;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
