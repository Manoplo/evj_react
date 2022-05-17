import {
  CreditCardOutlined,
  NotificationsOutlined,
  PersonOutline,
  Done,
} from "@material-ui/icons";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  height: 50px;

  border-bottom: 0.5px solid lightgray;
  margin-top: 33px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  padding-right: 100px;
`;
const Icon = styled.div`
  cursor: pointer;
  position: relative;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  top: -3px;
  left: 10px;
`;

const Number = styled.span`
  font-size: 9px;
  color: white;
`;

const Modal = styled.div`
  position: absolute;
  top: 30px;
  z-index: 1;
  right: 0;
  width: 320px;
  height: 120px;
  overflow: auto;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;

const NotificationRow = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  align-items: center;

  border-radius: 5px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const NotificationSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AdminTitle = styled.span``;

const NotificationIcon = ({ notification }) => {
  switch (notification.type) {
    case "App\\Notifications\\OrderMade":
      return <CreditCardOutlined />;

    case "App\\Notifications\\UserCreated":
      return <PersonOutline />;

    default:
      return <Done />;
      break;
  }
};

const Navbar = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));

  const [notifications, setNotifications] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios(
          "http://167.99.221.113/api/v1/admin/notifications/" + admin.admin.id
        );
        console.log(response);
        setNotifications(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotifications();
  }, []);

  const filterUnreadNotifications = () => {
    const filteredNotifications = notifications.filter((notification) => {
      return notification.read_at === null;
    });
    return filteredNotifications;
  };

  const markAsReadAndNavigate = async (notification) => {
    try {
      const response = await axios.post(
        "http://167.99.221.113/api/v1/admin/notifications/mark",
        {
          admin_id: admin.admin.id,
          id: notification.id,
        }
      );
      console.log(response);
      if (notification?.data?.order_id) {
        navigate("/admin/dashboard/orders/" + notification.data.order_id);
      } else {
        navigate("/admin/dashboard/users/" + notification.data.user_id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <AdminTitle>
          Actualmente conectado como <b>{admin.admin.email}</b>
        </AdminTitle>
        <Icon>
          <NotificationsOutlined
            onClick={() => setOpenModal((prevState) => !prevState)}
          />{" "}
          {filterUnreadNotifications().length > 0 && (
            <Circle>
              <Number>{filterUnreadNotifications().length}</Number>
            </Circle>
          )}
          {openModal && (
            <Modal>
              {filterUnreadNotifications().map((notification) => {
                return (
                  <>
                    <NotificationRow>
                      <NotificationSpan
                        onClick={() => markAsReadAndNavigate(notification)}
                      >
                        <NotificationIcon notification={notification} />
                        {notification?.data?.order_id
                          ? "Tienes un nuevo pedido. Ref: " +
                            notification?.data?.order_id
                          : "Nuevo usuario registrado con id: " +
                            notification?.data?.user_id}
                      </NotificationSpan>
                    </NotificationRow>
                  </>
                );
              })}
              {filterUnreadNotifications().length === 0 && (
                <NotificationSpan>
                  {" "}
                  <Done /> No tienes nuevas notificaciones
                </NotificationSpan>
              )}
            </Modal>
          )}
        </Icon>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
