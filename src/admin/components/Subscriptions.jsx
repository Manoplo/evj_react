import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const Subscriptions = () => {
  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <h1>Subs</h1>
      </DashBoardContainer>
    </MainContainer>
  );
};

export default Subscriptions;
