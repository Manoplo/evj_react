import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: lightpink;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Special discounts!</Container>;
};

export default Announcement;
