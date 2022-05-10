import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;
const Options = () => {
  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <h1>Stats</h1>
      </DashBoardContainer>
    </MainContainer>
  );
};

export default Options;
