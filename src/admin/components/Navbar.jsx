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
  padding-right: 60px;
`;
const Icon = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Icon>
          <NotificationsOutlined />{" "}
        </Icon>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
