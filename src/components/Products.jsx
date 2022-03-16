import styled from "styled-components";
import { products } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;

const Products = () => {
  return (
    <Container>
      {products.map((product) => {
        return <Product key={product.id} item={product} />;
      })}
    </Container>
  );
};

export default Products;
