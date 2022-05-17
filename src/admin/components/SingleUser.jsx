import styled from "styled-components";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./css/styles.css";
import {
  AttachMoney,
  CreditCardSharp,
  Email,
  EqualizerOutlined,
  GroupAddOutlined,
  LocalShippingOutlined,
  PhoneAndroid,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import toast, { Toaster } from "react-hot-toast";
import adminHeader from "../../services/admin-header";

const options = {
  filterType: "multiselect",
};

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const Field = styled.span`
  font-family: "Urbanist", sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: #b4b4b4;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 1.7rem;
  color: #727272;
  font-weight: 200;
`;
const AccountTitle = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 1.7rem;
  color: white;
  font-weight: 200;
  background-color: ${(props) => (props.active ? "#9df5b7" : "tomato")};
  width: fit-content;
  padding: 5px 10px;
  border-radius: 5px;
`;

const UserDisplay = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin: 15px 0 15px 15px;
`;

const ChartDisplay = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin: 15px 0 15px 15px;
  padding: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const ChartCardContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ChartCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /*  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1); */
  padding: 20px;
`;

const ChartCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChartCardTitle = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ChartCardBody = styled.div`
  display: flex;
  justify-content: center;
`;

const ChartCardAmount = styled.div`
  font-family: "Urbanist", sans-serif;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 80px;
  height: 80px;
  padding: 15px;

  border-radius: 50%;
  border: 1px solid lightpink;
  text-align: center;
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Form = styled.form``;
const Select = styled.select`
  padding: 5px;
`;

const Option = styled.option``;

const Information = styled.span`
  font-size: 12px;
  color: gray;
  font-style: italic;
  margin-bottom: 10px;
`;

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

const SingleUser = () => {
  const [data, setData] = useState(null);
  const [orders, setOrders] = useState(null);
  const [activeValue, setActiveValue] = useState(1);

  const navigate = useNavigate();
  const { userId } = useParams();

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
      name: "image",
      label: "IMAGEN",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <img src={value} alt="product" style={{ width: "30px" }} />;
        },
      },
    },
    {
      name: "price",
      label: "PRECIO",
    },
    {
      name: "in_store",
      label: "EN TIENDA",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return value ? "Sí" : "No";
        },
      },
    },
    {
      name: "category_id",
      label: "CATEGORÍA",
    },
    {
      name: "created_at",
      label: "FECHA PEDIDO",
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
                navigate(
                  `/admin/dashboard/products/edit/${tableMeta.rowData[0]}`
                )
              }
            >
              Ver detalles
            </Button>
          );
        },
      },
    },
  ];

  // Columnas del pedido

  const orderColumns = [
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
      options: {
        filter: true,
        customBodyRender: (value) => {
          if (value === "procesado") {
            return (
              <div
                style={{
                  color: "white",
                  backgroundColor: "orange",
                  padding: "8px",
                  borderRadius: "5px",
                  width: "fit-content",
                }}
              >
                <span>{value}</span>
              </div>
            );
          } else if (value === "enviado") {
            return (
              <div
                style={{
                  color: "white",
                  backgroundColor: "lightblue",
                  padding: "8px",
                  borderRadius: "5px",
                  width: "fit-content",
                }}
              >
                <span>{value}</span>
              </div>
            );
          } else if (value === "finalizado") {
            return (
              <div
                style={{
                  color: "white",
                  backgroundColor: "lightgreen",
                  padding: "8px",
                  borderRadius: "5px",
                  width: "fit-content",
                }}
              >
                <span>{value}</span>
              </div>
            );
          } else if (value === "cancelado") {
            return (
              <div
                style={{
                  color: "white",
                  backgroundColor: "tomato",
                  padding: "8px",
                  borderRadius: "5px",
                  width: "fit-content",
                }}
              >
                <span>{value}</span>
              </div>
            );
          }
        },
      },
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

  // Gets the total amount of money spent in orders

  const getTotalSpent = () => {
    if (data !== null) {
      let total = 0;
      data?.user?.orders.forEach((order) => {
        total += order.total;
      });
      return total;
    } else {
      return 0;
    }
  };
  // Gets the average amount of money spent in orders
  const getAverageSpent = () => {
    if (data !== null) {
      let total = 0;
      data?.user?.orders.forEach((order) => {
        total += order.total;
      });

      let average = total / data?.user?.orders.length;

      if (Object.is(NaN, average)) {
        return 0;
      }

      return average;
    } else {
      return 0;
    }
  };

  const getProducts = () => {
    let products = [];
    data?.user?.orders.forEach((order) => {
      order.products.forEach((product) => {
        products.push(product);
      });
    });
    console.log(products);
    return products;
  };

  // Changes user status function
  const handleAccountChange = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://167.99.221.113/api/v1/admin/users/activate",
        {
          id: userId,
          active: activeValue,
        }
      );
      toast.success(
        "Usuario actualizado",

        {
          duration: 3000,
          style: {
            border: "1px solid lightpink",
            padding: "16px",
            color: "black",
            fontFamily: "Urbanist",
          },
          iconTheme: {
            primary: "lightpink",
            secondary: "#FFFAEE",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  /* Fetching data from the API. */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          "http://167.99.221.113/api/v1/admin/users/" + userId,
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

    const fetchOrders = async () => {
      try {
        const response = await axios(
          "http://167.99.221.113/api/v1/admin/orders/new/" + userId,
          {
            headers: adminHeader(),
          }
        );
        console.log(response);
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    fetchOrders();
  }, [userId]);

  return (
    <>
      <MainContainer>
        <Toaster />
        <Sidebar />
        <DashBoardContainer>
          <Navbar />
          <TopContainer>
            <UserDisplay>
              <Field>
                <GroupAddOutlined /> NOMBRE:
              </Field>
              {data !== null ? (
                <Title> {data?.user?.name + " " + data?.user?.lastname}</Title>
              ) : (
                <Title> No existe ningún usuario con esa id. </Title>
              )}
              <Field>
                {" "}
                <Email /> EMAIL:
              </Field>
              <Title> {data?.user?.email}</Title>
              <Field>
                {" "}
                <PhoneAndroid /> TELÉFONO:
              </Field>
              <Title>
                {" "}
                {data?.details?.phone
                  ? data.details.phone
                  : "El usuario no ha facilitado su teléfono aún."}
              </Title>
              <Field>
                <LocalShippingOutlined /> DATOS DE ENTREGA:
              </Field>
              {data?.details !== null ? (
                <>
                  <Field>
                    <Title>
                      {data?.details?.address} - {data?.details?.town}
                    </Title>
                  </Field>

                  <Field>
                    <Title>
                      {data?.details?.cp} - {data?.details?.province}
                    </Title>
                  </Field>
                </>
              ) : (
                <Title>
                  {" "}
                  El usuario aún no ha facilitado sus datos de entrega.
                </Title>
              )}
              {/* {getProducts()} */}
              <Field>Estado de la cuenta:</Field>
              <AccountTitle active={data?.user?.active}>
                {data?.user?.active === 1 ? "Activa" : "Inactiva"}
              </AccountTitle>
              <Information>
                Cambia el estado de la cuenta de activa a inactiva. ¡Cuidado!
                Una cuenta inactiva no puede acceder a su perfil en la web.
              </Information>
              <Form onSubmit={handleAccountChange}>
                <Select onChange={(e) => setActiveValue(e.target.value)}>
                  <Option value={1}>Activa</Option>
                  <Option value={0}>Inactiva</Option>
                </Select>
                <Button type="submit" disabled={data === null}>
                  Cambiar estado
                </Button>
              </Form>
            </UserDisplay>
            <ChartDisplay>
              <Title>
                {" "}
                <EqualizerOutlined /> ESTADÍSTICAS DEL USUARIO
              </Title>
              <ChartCardContainer>
                <ChartCard>
                  <ChartCardHeader>
                    <ChartCardTitle>
                      <ShoppingCartOutlined className="icon" /> TOTAL PEDIDOS
                    </ChartCardTitle>
                  </ChartCardHeader>
                  <ChartCardBody>
                    <ChartCardAmount>
                      {data?.user?.orders?.length}
                    </ChartCardAmount>
                  </ChartCardBody>
                </ChartCard>
                <ChartCard>
                  <ChartCardHeader>
                    <ChartCardTitle>
                      <AttachMoney className="icon" /> TOTAL GASTADO
                    </ChartCardTitle>
                  </ChartCardHeader>
                  <ChartCardBody>
                    <ChartCardAmount>{getTotalSpent() + "€"}</ChartCardAmount>
                  </ChartCardBody>
                </ChartCard>
                <ChartCard>
                  <ChartCardHeader>
                    <ChartCardTitle>
                      <CreditCardSharp className="icon" /> GASTO MEDIO
                    </ChartCardTitle>
                  </ChartCardHeader>
                  <ChartCardBody>
                    <ChartCardAmount>
                      {getAverageSpent().toFixed(1) + "€"}
                    </ChartCardAmount>
                  </ChartCardBody>
                </ChartCard>
              </ChartCardContainer>
              <MUIDataTable
                title={"ÚLTIMOS PEDIDOS"}
                data={orders ? orders : []}
                columns={orderColumns}
                options={options}
              />
            </ChartDisplay>
          </TopContainer>
          <MUIDataTable
            title={"PRODUCTOS COMPRADOS"}
            data={getProducts()}
            columns={columns}
            options={options}
          />
        </DashBoardContainer>
      </MainContainer>
    </>
  );
};

export default SingleUser;
