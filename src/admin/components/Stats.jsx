import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { AssessmentOutlined } from "@material-ui/icons";

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 2rem;
  color: #727272;
  margin-left: 15px;
`;

const Stats = () => {
  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <Title>
          {" "}
          <AssessmentOutlined /> ESTADÍSTICAS
        </Title>
      </DashBoardContainer>
    </MainContainer>
  );
};

export default Stats;
