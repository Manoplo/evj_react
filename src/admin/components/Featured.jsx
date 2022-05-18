import styled from "styled-components";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";

const FeaturedContainer = styled.div`
  flex: 2;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 22px;
  color: gray;
  font-weight: 600;
  font-family: "Urbanist", sans-serif;
`;

const Legend = styled.p``;

const FeaturedChart = styled.div`
  width: 200px;
  height: 200px;
`;

const Input = styled.input`
  padding: 10px;
`;

const Featured = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async (value) => {
    try {
      const response = await axios.post(
        `https://www.elvestidordejuliettaapi.tk/api/v1/admin/stats/daily`,
        {
          date: value,
        }
      );
      setData(response.data);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    if (value === "") {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const dateString = `${year}-${month}-${day}`;
      setValue(dateString);
      fetchData(dateString);
    } else {
      fetchData(value);
    }
  }, [value]);

  return (
    <FeaturedContainer>
      <Top>
        <Title>GANANCIAS DIARIAS</Title>
      </Top>
      <Bottom>
        <FeaturedChart>
          <CircularProgressbar
            value={data.percentage ? data.percentage : 0}
            text={data.percentage ? `${data.percentage}%` : "0%"}
            strokeWidth={5}
          />
        </FeaturedChart>
        <Legend>
          <b>{data.total}</b>/ 150€
        </Legend>
        <Input type="date" onChange={(e) => setValue(e.target.value)} />
      </Bottom>
    </FeaturedContainer>
  );
};

export default Featured;
