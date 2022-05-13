import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { AssessmentOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

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
const TitleChart = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 1rem;
  color: #727272;
  margin-left: 40px;
`;

const TopContainer = styled.div`
  display: flex;
  width: 90%;
  height: 500px;
`;

const TopSoldContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TopCategoriesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Stats = () => {
  const [topSold, setTopSold] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const [topUusers, setTopUusers] = useState([]);

  useEffect(() => {
    const fetchTopSold = async () => {
      try {
        const response = await axios.get(
          "http://elvestidordejulietta.test/api/v1/admin/stats/top"
        );
        console.log(response);
        setTopSold(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTopCategories = async () => {
      try {
        const response = await axios.get(
          "http://elvestidordejulietta.test/api/v1/admin/stats/top-categories"
        );
        console.log(response);
        setTopCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTopUsers = async () => {
      try {
        const response = await axios.get(
          "http://elvestidordejulietta.test/api/v1/admin/stats/buyers"
        );
        console.log(response);
        setTopUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTopUusers = async () => {
      try {
        const response = await axios.get(
          "http://elvestidordejulietta.test/api/v1/admin/stats/unregistered"
        );
        console.log(response);
        setTopUusers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopSold();
    fetchTopCategories();
    fetchTopUsers();
    fetchTopUusers();
  }, []);

  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <Title>
          {" "}
          <AssessmentOutlined /> ESTADÍSTICAS
        </Title>

        <TopContainer>
          <TopSoldContainer>
            <TitleChart>Productos más vendidos</TitleChart>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                onClick={() => console.log("clicked")}
                width={500}
                height={300}
                data={topSold}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#d884ab" />
              </BarChart>
            </ResponsiveContainer>
          </TopSoldContainer>
          <TopCategoriesContainer>
            <TitleChart>Categorías con más ventas</TitleChart>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={topCategories}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="total"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>
          </TopCategoriesContainer>
        </TopContainer>
        <TopContainer>
          <TopSoldContainer>
            <TitleChart>Usuarios con más compras</TitleChart>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                onClick={() => console.log("clicked")}
                width={500}
                height={300}
                data={topUsers}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="email" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#2c8aa1" />
              </BarChart>
            </ResponsiveContainer>
          </TopSoldContainer>
          <TopCategoriesContainer>
            <TitleChart>Usuarios no registrados con más compras</TitleChart>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                onClick={() => console.log("clicked")}
                width={500}
                height={300}
                data={topUusers}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="email" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#2ca149" />
              </BarChart>
            </ResponsiveContainer>
          </TopCategoriesContainer>
        </TopContainer>
      </DashBoardContainer>
    </MainContainer>
  );
};

export default Stats;
