import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";
import adminHeader from "../../services/admin-header";

const ChartContainer = styled.div`
  flex: 4;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const TopLegend = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 200;
  color: gray;
`;

const Chart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://elvestidordejulietta.test/api/v1/admin/stats/yearly/${new Date().getFullYear()}`,
          {
            headers: adminHeader(),
          }
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ChartContainer>
      <TopLegend>
        {data
          ? "Ventas mensuales para el año corriente - " +
            new Date().getFullYear()
          : "Cargando..."}
      </TopLegend>

      {data && (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#d884d1"
              fill="#d88492"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </ChartContainer>
  );
};

export default Chart;
