import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
import { GiDress, GiTrousers, GiSkirt, GiHighHeel } from "react-icons/gi";
import { BsHandbagFill } from "react-icons/bs";
import { IoShirtSharp } from "react-icons/io5";
import { ClipLoader } from "react-spinners";

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem;
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 2rem;
  color: #727272;
  display: flex;
  gap: 13px;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 15px;
`;
const CategoryAdmin = () => {
  const { categorySlug } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getIcon = (category) => {
    switch (category) {
      case "vestidos":
        return <GiDress />;
      case "pantalones":
        return <GiTrousers />;
      case "faldas":
        return <GiSkirt />;
      case "calzado":
        return <GiHighHeel />;
      case "accesorios":
        return <BsHandbagFill />;
      case "camisetas":
        return <IoShirtSharp />;
      default:
        return <StorefrontOutlined />;
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://www.elvestidordejuliettaapi.tk/api/v1/categories/${categorySlug}`
        );
        console.log(response);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [categorySlug]);

  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <TitleContainer>
          <Title>
            {getIcon(categorySlug)}
            {categorySlug.toUpperCase()}
          </Title>
        </TitleContainer>
        <ProductsContainer>
          {loading ? (
            <LoaderContainer>
              <ClipLoader size={150} color={"lightpink"} loading={loading} />
              ...Cargando
            </LoaderContainer>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </ProductsContainer>
      </DashBoardContainer>
    </MainContainer>
  );
};

export default CategoryAdmin;
