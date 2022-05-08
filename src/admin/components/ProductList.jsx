import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import styled from "styled-components";
import {
  AddBoxOutlined,
  ArrowForwardIos,
  StorefrontOutlined,
} from "@material-ui/icons";
import { GiDress, GiTrousers, GiSkirt, GiHighHeel } from "react-icons/gi";
import { BsHandbagFill } from "react-icons/bs";
import { IoShirtSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  margin-left: 15px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 250px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fafafa;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const CategoryTitle = styled.h2`
  font-size: 50px;
  color: gray;
  display: flex;
  gap: 13px;
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 2rem;
  color: #727272;
`;

const Button = styled.button`
  background: lightpink;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  height: 50px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background: lightcoral;
    color: white;
  }
`;
const CatButton = styled.button`
  background: lightpink;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  height: 50px;
  min-width: 130px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background: lightcoral;
    color: white;
  }
`;

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <ProductTitleContainer>
          <Title>
            <StorefrontOutlined /> PRODUCTOS
          </Title>
          <Button onClick={() => navigate("/admin/dashboard/products/new")}>
            <AddBoxOutlined /> AÑADIR NUEVO
          </Button>
        </ProductTitleContainer>
        <Categories>
          <CategoryContainer>
            <CategoryTitle>
              <GiDress />
              VESTIDOS
            </CategoryTitle>
            <CatButton
              onClick={() =>
                navigate("/admin/dashboard/products/category/vestidos")
              }
            >
              IR A CATEGORÍA <ArrowForwardIos />
            </CatButton>
          </CategoryContainer>
          <CategoryContainer>
            <CategoryTitle>
              <IoShirtSharp />
              CAMISETAS
            </CategoryTitle>
            <CatButton
              onClick={() =>
                navigate("/admin/dashboard/products/category/camisetas")
              }
            >
              IR A CATEGORÍA <ArrowForwardIos />
            </CatButton>
          </CategoryContainer>
          <CategoryContainer>
            <CategoryTitle>
              <GiTrousers />
              PANTALONES
            </CategoryTitle>
            <CatButton
              onClick={() =>
                navigate("/admin/dashboard/products/category/pantalones")
              }
            >
              IR A CATEGORÍA <ArrowForwardIos />
            </CatButton>
          </CategoryContainer>
          <CategoryContainer>
            <CategoryTitle>
              <GiSkirt />
              FALDAS
            </CategoryTitle>
            <CatButton
              onClick={() =>
                navigate("/admin/dashboard/products/category/faldas")
              }
            >
              IR A CATEGORÍA <ArrowForwardIos />
            </CatButton>
          </CategoryContainer>
          <CategoryContainer>
            <CategoryTitle>
              <GiHighHeel />
              CALZADO
            </CategoryTitle>
            <CatButton
              onClick={() =>
                navigate("/admin/dashboard/products/category/calzado")
              }
            >
              IR A CATEGORÍA <ArrowForwardIos />
            </CatButton>
          </CategoryContainer>
          <CategoryContainer>
            <CategoryTitle>
              <BsHandbagFill />
              ACCESORIOS
            </CategoryTitle>
            <CatButton
              onClick={() =>
                navigate("/admin/dashboard/products/category/accesorios")
              }
            >
              IR A CATEGORÍA <ArrowForwardIos />
            </CatButton>
          </CategoryContainer>
        </Categories>
      </DashBoardContainer>
    </MainContainer>
  );
};

export default ProductList;
