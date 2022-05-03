import styled from "styled-components";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { CreditCardOutlined, Group } from "@material-ui/icons";
import "./css/styles.css";

const options = {
  filterType: "multiselect",
};

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 2rem;
  color: #727272;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 15px;
`;

const Button = styled.button`
  background: lightpink;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: lightcoral;
    color: white;
  }
`;

const UsersList = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "name",
      label: "NOMBRE",
    },
    {
      name: "lastname",
      label: "APELLIDO",
    },
    {
      name: "email",
      label: "EMAIL",
    },

    {
      name: "active",
      label: "ACTIVO",
    },

    {
      name: "created_at",
      label: "ALTA",
    },
    {
      name: "updated_at",
      label: "MODIFICADO",
    },
    {
      name: "Acciones",
      label: "ACCIONES",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
              className="btn btn-danger"
              onClick={() =>
                navigate(`/admin/dashboard/users/${tableMeta.rowData[0]}`)
              }
            >
              Ver detalles
            </Button>
          );
        },
      },
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          "http://elvestidordejulietta.test/api/v1/admin/users"
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <MainContainer>
        <Sidebar />
        <DashBoardContainer>
          <Navbar />
          <TitleContainer>
            <Title>
              {" "}
              <Group className="icon-main" /> USUARIOS
            </Title>
          </TitleContainer>
          <MUIDataTable data={data} columns={columns} options={options} />
        </DashBoardContainer>
      </MainContainer>
    </>
  );
};

export default UsersList;
