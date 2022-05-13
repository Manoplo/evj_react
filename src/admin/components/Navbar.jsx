import { NotificationsOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useState, useEffect } from "react";
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

const AdminTitle = styled.span``;

const Navbar = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));

  const [notifications, setNotifications] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios(
          "http://elvestidordejulietta.test/api/v1/admin/notifications/" +
            admin.admin.id
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
    return notifications.filter((notification) => {
      return !notification.reat_at;
    });
  };

  return (
    <Container>
      <Wrapper>
        <AdminTitle>
          Actualmente conectado como <b>{admin.admin.email}</b>
        </AdminTitle>
        <Icon onClick={() => setOpenModal((prevState) => !prevState)}>
          <NotificationsOutlined />{" "}
          {filterUnreadNotifications().length > 0 && (
            <Circle>
              <Number>{filterUnreadNotifications().length}</Number>
            </Circle>
          )}
          {openModal && <div>Hola</div>}
        </Icon>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
