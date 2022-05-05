import axios from "axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import adminHeader from "../../services/admin-header";
import toast, { Toaster } from "react-hot-toast";

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 20px 0 0 20px;

  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const OrderField = styled.div`
  display: flex;
`;
const OrderTitle = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 1.5rem;
`;

const OrderInfo = styled.span``;

const StateContainer = styled.div`
  background-color: ${(props) => {
    switch (props.state) {
      case "procesado":
        return "orange";
      case "enviado":
        return "lightblue";
      case "finalizado":
        return "lightgreen";
      case "cancelled":
        return "tomato";
      default:
        return "#f5f5f5";
    }
  }};
  padding: 15px;
  width: fit-content;
  border-radius: 10px;
  color: white;
`;

const Form = styled.form``;
const Select = styled.select`
  padding: 10px;
`;
const Option = styled.option``;

const Button = styled.button`
  background: ${(props) => (props.disabled ? "gray" : "lightpink")};
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

const SingleOrder = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");

  const { orderId } = useParams();
  const handleStatusSubmit = async (e) => {
    e.preventDefault();
    console.log(status);

    try {
      const response = await axios.post(
        `http://elvestidordejulietta.test/api/v1/admin/orders/status/${orderId}`,
        {
          status,
        },
        {
          headers: adminHeader(),
        }
      );
      toast.success("Estado actualizado");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await axios(
        "http://elvestidordejulietta.test/api/v1/admin/orders/" + orderId
      );
      console.log(response);
      setData(response.data);
    };
    fetchOrder();
  }, []);

  return (
    <MainContainer>
      <Toaster />
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <OrderInfoContainer>
          <OrderTitle>Referencia del pedido:</OrderTitle>
          <OrderInfo>{data?.order?.id}</OrderInfo>
          <OrderTitle>Nombre destinatario:</OrderTitle>
          <OrderInfo>{data?.user?.name + " " + data?.user?.lastname}</OrderInfo>
          <OrderTitle>Dirección de envío:</OrderTitle>
          <OrderInfo>
            {data?.user?.details ? (
              <>
                {data?.user?.details?.address} - {data?.user?.details?.cp} -{" "}
                {data?.user?.details?.town} - ({data?.user?.details?.province})
              </>
            ) : (
              <>
                {data?.user?.address} - {data?.user?.cp} - {data?.user?.town} -
                {data?.user?.province}
              </>
            )}
          </OrderInfo>
          <OrderTitle>Fecha de creación:</OrderTitle>
          <OrderInfo>{data?.order?.created_at}</OrderInfo>
          <OrderTitle>Estado del pedido:</OrderTitle>
          <StateContainer state={data?.order?.status}>
            {data?.order?.status}
          </StateContainer>
          <OrderTitle>Cambiar estado a:</OrderTitle>
          <Form onSubmit={handleStatusSubmit}>
            <Select
              onChange={(e) => setStatus(e.target.value)}
              name="status"
              id="status"
            >
              <Option value="procesado">Procesado</Option>
              <Option value="enviado">Enviado</Option>
              <Option value="finalizado">Finalizado</Option>
              <Option value="cancelado">Cancelado</Option>
            </Select>
            <Button type="submit">Cambiar estado</Button>
          </Form>
        </OrderInfoContainer>
      </DashBoardContainer>
    </MainContainer>
  );
};

export default SingleOrder;
