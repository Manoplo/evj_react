import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Widget from "../components/Widget";
import Featured from "../components/Featured";
import Chart from "../components/Chart";

const MainContainer = styled.div`
  display: flex;
`;
const DashBoardContainer = styled.div`
  flex: 6;
`;

const Widgets = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  margin-top: 20px;
`;

const Charts = styled.div`
  display: flex;
  padding: 5px 20px;
  gap: 20px;
  margin-top: 40px;
`;

const Dashboard = () => {
  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <Widgets>
          <Widget type="users" />
          <Widget type="uusers" />
          <Widget type="orders" />
          <Widget type="money" />
        </Widgets>
        <Charts>
          <Featured />
          <Chart />
        </Charts>
      </DashBoardContainer>
    </MainContainer>
  );
};

export default Dashboard;
