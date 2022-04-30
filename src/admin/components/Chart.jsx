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

const ChartContainer = styled.div`
  flex: 4;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const dataFake = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

/* const data = [
  {
    name: "Enero",
    total: 4000,
  },
  {
    name: "Febrero",
    total: 3000,
  },
  {
    name: "Marzo",
    total: 2000,
  },
  {
    name: "Abril",
    total: 2780,
  },
  {
    name: "Mayo",
    total: 1890,
  },
  {
    name: "Junio",
    total: 2390,
  },
  {
    name: "Julio",
    total: 3490,
  },
  {
    name: "Agosto",
    total: 2780,
  },
  {
    name: "Septiembre",
    total: 1890,
  },
  {
    name: "Octubre",
    total: 2390,
  },
  {
    name: "Noviembre",
    total: 3490,
  },
  {
    name: "Diciembre",
    total: 3490,
  },
]; */

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
          `http://elvestidordejulietta.test/api/v1/admin/stats/yearly/${new Date().getFullYear()}`
        );

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
