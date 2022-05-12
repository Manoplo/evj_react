import { NotificationsOutlined } from "@material-ui/icons";
import styled from "styled-components";

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
`;

const AdminTitle = styled.span``;

const Navbar = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));

  return (
    <Container>
      <Wrapper>
        <AdminTitle>
          Actualmente conectado como <b>{admin.admin.email}</b>
        </AdminTitle>
        <Icon>
          <NotificationsOutlined />{" "}
        </Icon>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
