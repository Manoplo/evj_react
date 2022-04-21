import styled from "styled-components";
import NavBarFixed from "../components/NavBarFixed";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Bookmarks } from "@material-ui/icons";
import axios from "axios";
import authHeader from "../services/auth-header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 85%;
  min-height: 90vh;
  margin: auto;
`;

const Header = styled.div`
  display: flex;

  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

const Whishlist = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `http://elvestidordejulietta.test/api/v1/whishlist/${user.user.id}`,
        {
          headers: authHeader(),
        }
      );
      console.log(response.data);
      setWishlist(response.data[0].products);
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBarFixed />

      <Wrapper>
        <Header>
          <Bookmarks />
          <Title>Lista de deseos</Title>
        </Header>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Whishlist;
