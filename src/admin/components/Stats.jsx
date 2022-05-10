import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const Stats = () => {
  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        Stats
      </DashBoardContainer>
    </MainContainer>
  );
};

export default Stats;
