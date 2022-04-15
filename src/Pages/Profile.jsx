import React, { useEffect, useState } from "react";
import {
  ContactsOutlined,
  LocalMallOutlined,
  AssignmentIndOutlined,
  AlternateEmailOutlined,
  LocalShippingOutlined,
} from "@material-ui/icons";
import NavBarFixed from "../components/NavBarFixed";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// Remove this import of mocking data when real orders are fetched
import { orders } from "../data";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 85%;
  min-height: 90vh;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  border: ${(props) => (props.selected ? "3px solid black" : "1px solid gray")};
  padding: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = () => {
  const [isOrdersSelected, setIsOrdersSelected] = useState(true);

  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isLoggedIn) {
      navigate("/login");
    }
  }, [auth.isLoggedIn]);

  return (
    <>
      <NavBarFixed />
      <Wrapper>
        <Title>Mi cuenta</Title>
        <TabContainer>
          <TabButton
            onClick={() => setIsOrdersSelected(true)}
            selected={isOrdersSelected ? "selected" : ""}
          >
            <ContactsOutlined />
            Mis datos
          </TabButton>
          <TabButton
            onClick={() => setIsOrdersSelected(false)}
            selected={!isOrdersSelected ? "selected" : ""}
          >
            <LocalMallOutlined />
            Mis pedidos
          </TabButton>
        </TabContainer>
        <InfoContainer>
          {isOrdersSelected ? <UserInfo user={{ ...user }} /> : <UserOrders />}
        </InfoContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const UserInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const UserInfoTitle = styled.h1`
  font-size: 20px;
  font-weight: 800;
  font-family: "Urbanist", sans-serif;
`;
const UserInfoData = styled.h1`
  font-size: 15px;
  font-weight: 500;
  font-family: "Urbanist", sans-serif;
`;

const UserInfo = ({ user }) => {
  return (
    <>
      <UserInfoContainer>
        <UserInfoRow>
          <AssignmentIndOutlined />
          <UserInfoTitle>Nombre completo</UserInfoTitle>
        </UserInfoRow>
        <UserInfoData>
          {user.user?.name + " " + user?.user?.lastname}
        </UserInfoData>
        <UserInfoRow>
          <AlternateEmailOutlined />
          <UserInfoTitle>Dirección de correo</UserInfoTitle>
        </UserInfoRow>
        <UserInfoData>{user.user?.email}</UserInfoData>
        <UserInfoRow>
          <LocalShippingOutlined />
          <UserInfoTitle>Datos de envío</UserInfoTitle>
        </UserInfoRow>
        <UserInfoData>
          No tenemos datos de envío aún. Edita tu cuenta para añadirlos.
        </UserInfoData>
      </UserInfoContainer>
    </>
  );
};

const UserOrdersContainer = styled.div`
  display: flex;
  margin-top: 20px;

  flex-wrap: wrap;
  gap: 20px;
`;

const OrderContainer = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  border: 1px solid lightgray;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  ${mobile({
    width: "100%",
  })}

  &:hover {
    box-shadow: 1px 20px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const OrderParagraph = styled.p`
  font-size: 15px;
  margin-top: -5px;
`;

const OrderTitle = styled.h4`
  font-size: 20px;
  font-weight: 800;
  font-family: "Urbanist", sans-serif;
  margin-top: -5px;
`;

const OrderSpan = styled.span`
  font-size: 16px;
  font-weight: 300;
`;

const OrderStatus = styled.span`
  font-size: 12px;
  border-radius: 3px;
  color: white;
  padding: 8px;
  font-weight: 500;
  background-color: ${(props) =>
    props.status === "Pendiente"
      ? "orange"
      : props.status === "Enviado"
      ? "green"
      : "red"};
`;

const OrderProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  max-height: 233px;
  padding: 20px;
  border-radius: 3px;
  margin-top: -12px;
  margin-bottom: 8px;
  overflow: auto;
`;

const OrderTotal = styled.h1`
  margin-top: -3px;
`;

const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid lightpink;
  color: black;
  font-size: 15px;
  padding: 5px;
  cursor: pointer;
`;

const UserOrders = () => {
  return (
    <>
      <UserOrdersContainer>
        {orders.map((order) => (
          <OrderContainer>
            <OrderParagraph> Referencia del pédido : {order.id}</OrderParagraph>
            <OrderTitle>
              {" "}
              Fecha de realización del pedido:{" "}
              <OrderSpan>{order.orderedAt}</OrderSpan>
            </OrderTitle>
            <OrderTitle>
              {" "}
              Estado del pedido:{" "}
              <OrderStatus status={order.status}>
                {order.status}
              </OrderStatus>{" "}
            </OrderTitle>

            <OrderTitle> Productos del pedido: </OrderTitle>
            <OrderProductsContainer>
              {order.products.map((product) => (
                <>
                  <h3>{product.title}</h3>
                  <OrderParagraph>{product.price}</OrderParagraph>
                  <OrderParagraph>Cantidad : {product.quantity}</OrderParagraph>
                </>
              ))}
            </OrderProductsContainer>
            <OrderSpan>Total:</OrderSpan>
            <OrderTotal>
              {order.total} <OrderSpan>(impuestos incluidos)</OrderSpan>{" "}
            </OrderTotal>
            <CancelButton>Cancelar pedido</CancelButton>
          </OrderContainer>
        ))}
      </UserOrdersContainer>
    </>
  );
};

export default Profile;
