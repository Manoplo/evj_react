import {
  BookmarkBorderOutlined,
  SearchOutlined,
  ShoppingBasketOutlined,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { mobile } from "../responsive";

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
  ${mobile({
    minWidth: "100%",
    height: "100%",
    flex: 1,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
  })}
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
  z-index: 0;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  ${mobile({
    top: "0",
    height: "100%",
    width: "100%",
  })}

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
  const { categorySlug } = useParams();

  return (
    <Container>
      <Image src={item.image} alt={item.name} />
      <Info>
        <Icon>
          <Link to="/cart">
            <ShoppingBasketOutlined />
          </Link>
        </Icon>
        <Icon>
          <Link
            to={`/categorias/${
              categorySlug !== undefined ? categorySlug : item.category.slug
            }/${item.id}`}
          >
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <Link to="/whishlist">
            <BookmarkBorderOutlined />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
