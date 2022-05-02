import {
  KeyboardArrowUp,
  PersonOutline,
  ShoppingCartOutlined,
  MonetizationOnOutlined,
  PersonAdd,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./css/styles.css";

const WidgetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 10px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 100px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: gray;
`;
const Counter = styled.span`
  font-size: 28px;
  font-weight: 300;
`;
const GoUsers = styled.span`
  width: max-content;
  font-size: 14px;
  border-bottom: 1px solid gray;

  &:hover {
    color: lightcoral;
  }
`;
const Percentage = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.type === "positive" ? "green" : "red")};
`;

const Widget = ({ type, data }) => {
  let datatype;

  // temporal

  const per = 20;

  switch (type) {
    case "users":
      datatype = {
        title: "USUARIOS",
        isMoney: false,
        link: "Ver todos los usuarios",
        anchor: "users",
        icon: <PersonAdd className="icon" />,
        number: data.users,
      };

      break;
    case "uusers":
      datatype = {
        title: "USUARIOS NO REGISTRADOS",
        isMoney: false,
        link: "Ver todos los usuarios",
        anchor: "uusers",
        icon: <PersonOutline className="icon" />,
        number: data.uusers,
      };

      break;

    case "orders":
      datatype = {
        title: "PEDIDOS",
        isMoney: false,
        link: "Ver todos los pedidos",
        anchor: "orders",
        icon: <ShoppingCartOutlined className="icon" />,
        number: data.orders,
      };

      break;

    case "money":
      datatype = {
        title: "GANANCIAS",
        isMoney: true,

        icon: <MonetizationOnOutlined className="icon" />,
        number: data.totalRevenue,
      };

      break;

    default:
      break;
  }

  return (
    <WidgetContainer>
      <Left>
        <Title>{datatype.title}</Title>
        <Counter>
          {datatype.number}
          {datatype.isMoney && "€"}
        </Counter>
        <Link to={`/admin/dashboard/${datatype.anchor}`}>
          {" "}
          <GoUsers>{datatype.link}</GoUsers>
        </Link>
      </Left>
      <Right>
        <Percentage type="positive">
          <KeyboardArrowUp />
          {per}%
        </Percentage>
        {datatype.icon}
      </Right>
    </WidgetContainer>
  );
};

export default Widget;
