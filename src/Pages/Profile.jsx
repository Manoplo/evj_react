import React, { useEffect, useState } from "react";
import {
  ContactsOutlined,
  LocalMallOutlined,
  AssignmentIndOutlined,
  AlternateEmailOutlined,
  LocalShippingOutlined,
  Edit,
  ArrowBackIosOutlined,
} from "@material-ui/icons";
import NavBarFixed from "../components/NavBarFixed";
import Footer from "../components/Footer";
import EditProfile from "../components/EditProfile";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import authHeader from "../services/auth-header";
import axios from "axios";
// Remove this import of mocking data when real orders are fetched
import { orders } from "../data";

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
  const [isEditing, setIsEditing] = useState(false);
  const [isOrdersSelected, setIsOrdersSelected] = useState(true);

  const [details, setDetails] = useState(null);

  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `http://elvestidordejulietta.test/api/v1/details/${user.user.id}`,
          {
            headers: authHeader(),
          }
        );
        setDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, []);

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
            disabled={isEditing}
          >
            <LocalMallOutlined />
            Mis pedidos
          </TabButton>
        </TabContainer>
        <InfoContainer>
          {isEditing ? (
            <EditProfile closeEdit={(isEditing) => setIsEditing(isEditing)} />
          ) : isOrdersSelected ? (
            <UserInfo
              user={{ ...user }}
              details={{ ...details }}
              editing={(editing) => setIsEditing(editing)}
            />
          ) : (
            <UserOrders />
          )}
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
const UserInfoDetailsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
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

const Button = styled.button`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid lightpink;
  background-color: white;
  cursor: pointer;
  max-width: 20%;
  font-weight: 700;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  &:hover {
    background-color: lightpink;
    color: white;
  }

  ${mobile({
    maxWidth: "100%",
  })}
`;

const UserInfo = ({ user, details, editing }) => {
  const navigate = useNavigate();
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
          {Object.keys(details).length > 0 ? (
            <>
              <UserInfoDetailsRow>
                <b>Teléfono:</b> {details.phone}
              </UserInfoDetailsRow>
              <UserInfoDetailsRow>
                <b>Dirección:</b> {details.address}
              </UserInfoDetailsRow>
              <UserInfoDetailsRow>
                <b>Código Postal:</b> {details.cp}
              </UserInfoDetailsRow>
              <UserInfoDetailsRow>
                <b>Ciudad:</b> {details.town}
              </UserInfoDetailsRow>
              <UserInfoDetailsRow>
                <b>Provincia:</b> {details.province}
              </UserInfoDetailsRow>
            </>
          ) : (
            <>
              <span>
                {" "}
                No tienes datos de envío. Edita tu perfil para añadirlos.
              </span>
            </>
          )}
        </UserInfoData>
        <Button onClick={() => editing(true)}>
          <Edit />
          Editar información
        </Button>
        <Button onClick={() => navigate("/")}>
          <ArrowBackIosOutlined />
          Salir
        </Button>
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
