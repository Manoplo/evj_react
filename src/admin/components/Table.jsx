import MUIDataTable from "mui-datatables";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import adminHeader from "../../services/admin-header";

const options = {
  filterType: "checkbox",
};

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

const Table = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "total",
      label: "TOTAL",
    },
    {
      name: "status",
      label: "ESTADO",
    },
    {
      name: "uuser_id",
      label: "UNR ID",
    },
    {
      name: "user_id",
      label: "Usuario ID",
    },
    {
      name: "created_at",
      label: "REALIZADO",
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
                navigate(`/admin/dashboard/orders/${tableMeta.rowData[0]}`)
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
          "http://elvestidordejulietta.test/api/v1/admin/orders/latest",
          {
            headers: adminHeader(),
          }
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
    <MUIDataTable
      title={"ÚLTIMOS PEDIDOS"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default Table;
