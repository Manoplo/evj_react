import axios from "axios";
import styled from "styled-components";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const SingleProduct = () => {
  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        SingleProduct
      </DashBoardContainer>
    </MainContainer>
  );
};

export default SingleProduct;
