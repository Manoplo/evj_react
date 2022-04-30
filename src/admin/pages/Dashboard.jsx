import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Widget from "../components/Widget";
import Featured from "../components/Featured";
import Chart from "../components/Chart";
import { useState, useEffect } from "react";
import axios from "axios";

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
  const [data, setData] = useState([]);
  const [earnings, setEarnings] = useState({});
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWidgets = async () => {
      try {
        const response = await axios(
          "http://elvestidordejulietta.test/api/v1/admin/stats/widgets"
        );

        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWidgets();
  }, []);

  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <Widgets>
          <Widget type="users" data={data} />
          <Widget type="uusers" data={data} />
          <Widget type="orders" data={data} />
          <Widget type="money" data={data} />
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
