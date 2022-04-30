import styled from "styled-components";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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

  const handleInputChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <FeaturedContainer>
      <Top>
        <Title>GANANCIAS DIARIAS</Title>
      </Top>
      <Bottom>
        <FeaturedChart>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </FeaturedChart>
        <Legend>90€ / 150€</Legend>
        <Input type="date" onChange={handleInputChange} />
      </Bottom>
    </FeaturedContainer>
  );
};

export default Featured;
