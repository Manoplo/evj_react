import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
`;
const CardImageContainer = styled.div`
  width: 100%;
`;
const CardImage = styled.img`
  width: 100%;
`;
const CardTitle = styled.h2`
  margin-bottom: -10px;
`;
const CardDescription = styled.p`
  margin-bottom: -10px;
`;
const CardPrice = styled.p`
  margin-bottom: -10px;
`;

const CardInfoContainer = styled.div``;

const CardButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;
const CardQuantity = styled.p`
  margin-bottom: -10px;
`;
const CardSize = styled.p``;

const CardButton = styled.button`
  background: lightpink;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background: lightcoral;
    color: white;
  }
`;

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <CardInfoContainer>
        <CardImageContainer>
          <CardImage src={product.image} />
        </CardImageContainer>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
        <CardPrice>
          <b>Precio :</b> {product.price}€
        </CardPrice>
        {product?.pivot && (
          <>
            <CardQuantity>
              <b>Cantidad: </b>
              {product.pivot.quantity}
            </CardQuantity>
            <CardSize>
              <b>Talla: </b>
              {product?.pivot?.size ? product.pivot.size : "S"}
            </CardSize>
          </>
        )}
      </CardInfoContainer>
      <CardButtonContainer>
        <CardButton
          onClick={() => navigate("/admin/dashboard/products/" + product.id)}
        >
          Ir al producto
        </CardButton>
      </CardButtonContainer>
    </Container>
  );
};

export default ProductCard;
