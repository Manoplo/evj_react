import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { addItem } from "../app/slices/cartSlice";
import { useDispatch } from "react-redux";
import {
  Add,
  BookmarkBorderOutlined,
  Bookmarks,
  LocalLaundryServiceOutlined,
  LocalOfferOutlined,
  Remove,
  ShoppingBasket,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Collapse, Text } from "@nextui-org/react";
import { InnerImageZoom } from "react-inner-image-zoom";
import toast, { Toaster } from "react-hot-toast";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import NavBarFixed from "../components/NavBarFixed";
import Recommendations from "../components/Recommendations";
import SocialMediaButtons from "../components/SocialMediaButtons";
import axios from "axios";
import { mobile } from "../responsive";
import authHeader from "../services/auth-header";
import baseUrl from "../services/baseUrl";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  ${mobile({
    height: "90vh",
  })}
`;

const Img = styled.img`
  width: 50%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  margin-left: -100px;
  ${mobile({
    padding: "0px",
    marginLeft: "0px",
  })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterSize = styled.select``;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  margin-top: 20px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 10px;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid lightpink;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid lightpink;
  background-color: white;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: lightpink;
    color: white;
  }
`;

const AccordionContainer = styled.div`
  display: flex;
  width: 50%;
  margin-top: 20px;
  ${mobile({
    width: "100%",
  })}
`;

const BreadCrumbs = styled.div`
  display: flex;
  margin: 20px 0 -50px 230px;
  font-size: 14px;
`;
const Crumb = styled.p`
  &:hover {
    font-weight: 700;
  }
`;

const Producto = () => {
  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState(0);
  const [size, setSize] = useState("");
  const [product, setProduct] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [listed, setListed] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const { productId, categorySlug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // EFFECTS
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    if (!user) return;
    const checkListed = async () => {
      const response = await axios.get(
        `${baseUrl}/whishlist/check/${user.user.id}/${productId}`
      );

      if (response.data.success) {
        setListed(true);
      } else {
        setListed(false);
      }
    };
    checkListed();
  }, [user]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await axios.get(
          `${baseUrl}/categories/${categorySlug}/${productId}`
        );

        setProduct(result.data);
        setTotal(result.data.price);
      } catch (error) {
        navigate(`/categorias/${categorySlug}`);
      }
    };

    fetchProduct();
  }, [productId, categorySlug]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const result = await axios.get(`${baseUrl}/products/recommendations`);

        setRecommendations(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecommendations();
  }, [productId, categorySlug]);

  // FUNCTIONS
  const handleSelectChange = (e) => {
    setSize(e.target.value);
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
    setTotal(total + product.price);
  };
  const decreaseAmount = () => {
    if (amount < 2) return;

    setAmount(amount - 1);
    setTotal(total - product.price);
  };

  const addToCart = () => {
    dispatch(
      addItem({ ...product, quantity: amount, price: total, size: size })
    );
    // Toast animation
    toast.success("PRODUCTO AÑADIDO AL CARRITO", {
      style: {
        border: "1px solid lightpink",
        padding: "16px",
        color: "black",
        fontFamily: "Urbanist",
      },
      iconTheme: {
        primary: "lightpink",
        secondary: "#FFFAEE",
      },
    });
  };

  const handleWhishlistedItem = async (id) => {
    if (!user) {
      toast.error(
        "NECESITAS ESTAR REGISTRADO PARA GUARDAR PRODUCTOS EN TU LISTA DE DESEOS",
        {
          style: {
            border: "1px solid lightpink",
            padding: "16px",
            color: "black",
            fontFamily: "Urbanist",
          },
          iconTheme: {
            primary: "lightpink",
            secondary: "#FFFAEE",
          },
        }
      );
      return;
    }

    setListed(!listed);

    if (listed) {
      toast.success("PRODUCTO ELIMINADO DE TU LISTA DE DESEOS", {
        style: {
          border: "1px solid lightpink",
          padding: "16px",
          color: "black",
          fontFamily: "Urbanist",
        },
        iconTheme: {
          primary: "lightpink",
          secondary: "#FFFAEE",
        },
      });
    } else {
      toast.success("PRODUCTO AÑADIDO A TU LISTA DE DESEOS", {
        style: {
          border: "1px solid lightpink",
          padding: "16px",
          color: "black",
          fontFamily: "Urbanist",
        },
        iconTheme: {
          primary: "lightpink",
          secondary: "#FFFAEE",
        },
      });
    }

    try {
      const response = await axios.post(
        "http://elvestidordejulietta.test/api/v1/whishlist",
        {
          product_id: id,
          user_id: user.user.id,
        },
        {
          headers: authHeader(),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <NavBarFixed />
      <BreadCrumbs>
        <Link to="/">
          <Crumb>Home</Crumb>
        </Link>
        <p>/</p>
        <Link to="/categorias">
          <Crumb>categorías</Crumb>
        </Link>
        <p>/</p>
        <Link to={"/categorias/" + categorySlug}>
          <Crumb>{categorySlug}</Crumb>
        </Link>
        <p>/</p>

        <p>{product?.name}</p>
      </BreadCrumbs>
      <Wrapper>
        <ImgContainer>
          <InnerImageZoom
            zoomScale={1.5}
            src={product?.image}
            className="zoomed_image"
          />
        </ImgContainer>
        <InfoContainer>
          <Title>
            {product?.name}{" "}
            {!listed ? (
              <BookmarkBorderOutlined
                onClick={() => handleWhishlistedItem(product.id)}
              />
            ) : (
              <Bookmarks onClick={() => handleWhishlistedItem(product.id)} />
            )}
          </Title>
          <Desc>{product?.description}</Desc>
          <Price>{total.toFixed(2)}€</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Talla</FilterTitle>
              <FilterSize value={size} onChange={handleSelectChange}>
                <FilterSizeOption value={"S"}>S</FilterSizeOption>
                <FilterSizeOption value={"M"}>M</FilterSizeOption>
                <FilterSizeOption value={"L"}>L</FilterSizeOption>
                <FilterSizeOption value={"XL"}>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={decreaseAmount} style={{ cursor: "pointer" }} />
              <Amount>{amount}</Amount>
              <Add onClick={increaseAmount} style={{ cursor: "pointer" }} />
            </AmountContainer>
          </AddContainer>
          <Button onClick={() => addToCart()}>
            {" "}
            <ShoppingCartOutlined /> AÑADIR AL CARRITO
            <Toaster />
          </Button>
          <Button onClick={() => navigate(`/categorias/${categorySlug}`)}>
            {" "}
            <ShoppingBasket /> SEGUIR COMPRANDO
            <Toaster />
          </Button>
          <AccordionContainer>
            <Collapse.Group>
              <Collapse
                title="Equivalencia de tallas"
                arrowIcon={<LocalOfferOutlined />}
              >
                <Text>
                  <b>S</b> (34-36 aproximadamente) <br />
                  <b>M</b> (37-39 aproximadamente) <br />
                  <b>L</b> (40-42 aproximadamente) <br />
                  <b>XL</b> (43-45 aproximadamente) <br />
                </Text>
              </Collapse>
              <Collapse
                title="Cuidado"
                arrowIcon={<LocalLaundryServiceOutlined />}
              >
                <Text>
                  {product?.info
                    ? product.info
                    : "No hay información específica para este producto"}
                </Text>
              </Collapse>
            </Collapse.Group>
          </AccordionContainer>
          <SocialMediaButtons productName={product?.name} />
        </InfoContainer>
      </Wrapper>
      <Recommendations recommendations={recommendations} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Producto;
