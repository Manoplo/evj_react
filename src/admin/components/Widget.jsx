import {
  KeyboardArrowUp,
  PersonOutline,
  ShoppingCartOutlined,
  MonetizationOnOutlined,
  PersonAdd,
} from "@material-ui/icons";
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
`;
const Percentage = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.type === "positive" ? "green" : "red")};
`;

const Widget = ({ type }) => {
  let data;

  // temporal

  const amount = 100;
  const per = 20;

  switch (type) {
    case "users":
      data = {
        title: "USUARIOS",
        isMoney: false,
        link: "Ver todos los usuarios",
        icon: <PersonAdd className="icon" />,
      };

      break;
    case "uusers":
      data = {
        title: "USUARIOS NO REGISTRADOS",
        isMoney: false,
        link: "Ver todos los usuarios",
        icon: <PersonOutline className="icon" />,
      };

      break;

    case "orders":
      data = {
        title: "PEDIDOS",
        isMoney: false,
        link: "Ver todos los pedidos",
        icon: <ShoppingCartOutlined className="icon" />,
      };

      break;

    case "money":
      data = {
        title: "GANANCIAS",
        isMoney: true,
        link: "Ver todas las ganancias",
        icon: <MonetizationOnOutlined className="icon" />,
      };

      break;

    default:
      break;
  }

  return (
    <WidgetContainer>
      <Left>
        <Title>{data.title}</Title>
        <Counter>
          {amount}
          {data.isMoney && "€"}
        </Counter>
        <GoUsers>{data.link}</GoUsers>
      </Left>
      <Right>
        <Percentage type="positive">
          <KeyboardArrowUp />
          {per}%
        </Percentage>
        {data.icon}
      </Right>
    </WidgetContainer>
  );
};

export default Widget;
