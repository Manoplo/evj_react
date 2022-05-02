import styled from "styled-components";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { CreditCardOutlined } from "@material-ui/icons";
import "./css/styles.css";

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 2.5rem;
  color: #727272;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 15px;
`;

const Button = styled.button`
  background: lightpink;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: lightcoral;
    color: white;
  }
`;

const SingleUser = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          "http://elvestidordejulietta.test/api/v1/admin/orders/"
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
    <>
      <MainContainer>
        <Sidebar />
        <DashBoardContainer>
          <Navbar />
          <TitleContainer>
            <Title> Single User {userId}</Title>
          </TitleContainer>
        </DashBoardContainer>
      </MainContainer>
    </>
  );
};

export default SingleUser;
