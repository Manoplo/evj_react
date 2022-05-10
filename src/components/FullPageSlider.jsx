import ReactFullpage from "@fullpage/react-fullpage";

import CatOneHome from "./CatOneHome";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import Products from "./Products";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import CatTwoHome from "./CatTwoHome";
import axios from "axios";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Image = styled.img`
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "80vh", width: "80vw" })}
`;

const Tooltip = styled.span`
  font-size: 18px;
  color: black;
  font-family: "Bodoni Moda";
  font-weight: 300;
  font-style: italic;
  ${mobile({ display: "none" })}
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const NewlyContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const New = styled.span`
  font-size: 18px;
  color: black;
  font-family: "Bodoni Moda";
  font-style: italic;
`;

const FullPageSlider = () => {
  const [products, setProducts] = useState([]);
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios(
          "http://elvestidordejulietta.test/api/v1/products/latest"
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSliders = async () => {
      try {
        const response = await axios(
          "http://elvestidordejulietta.test/api/v1/admin/sliders"
        );
        console.log(response.data);
        setSliders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSliders();
    fetchProducts();
  }, []);

  return (
    <ReactFullpage
      licenseKey="YOUR_KEY_HERE"
      scrollingSpeed={1200}
      scrollOverflow={true}
      controlArrows={true}
      navigation={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>{sliders[0]?.title}</Tooltip>
                  <Link to={`/categorias/${sliders[0]?.category}`}>
                    <Image src={sliders[0]?.first_image} />
                  </Link>
                  <Tooltip>{sliders[0]?.title}</Tooltip>
                </SliderWrapper>
              </div>
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>{sliders[0]?.title}</Tooltip>
                  <Link to={`/categorias/${sliders[0]?.category}`}>
                    <Image src={sliders[0]?.second_image} />
                  </Link>
                  <Tooltip>{sliders[0]?.title}</Tooltip>
                </SliderWrapper>
              </div>
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>{sliders[0]?.title}</Tooltip>
                  <Link to={`/categorias/${sliders[0]?.category}`}>
                    <Image src={sliders[0]?.third_image} />
                  </Link>
                  <Tooltip>{sliders[0]?.title}</Tooltip>
                </SliderWrapper>
              </div>
            </div>
            <div className="section">
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>{sliders[1]?.title}</Tooltip>
                  <Link to={`/categorias/${sliders[1]?.category}`}>
                    <Image src={sliders[1]?.first_image} />
                  </Link>
                  <Tooltip>{sliders[1]?.title}</Tooltip>{" "}
                </SliderWrapper>
              </div>
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>{sliders[1]?.title}</Tooltip>{" "}
                  <Link to={`/categorias/${sliders[1]?.category}`}>
                    <Image src={sliders[1]?.second_image} />
                  </Link>
                  <Tooltip>{sliders[1]?.title}</Tooltip>{" "}
                </SliderWrapper>
              </div>
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>{sliders[1]?.title}</Tooltip>{" "}
                  <Link to={`/categorias/${sliders[1]?.category}`}>
                    <Image src={sliders[1]?.third_image} />
                  </Link>
                  <Tooltip>{sliders[1]?.title}</Tooltip>{" "}
                </SliderWrapper>
              </div>
            </div>
            <div className="section">
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>{sliders[2]?.title}</Tooltip>
                  <Link to={`/categorias/${sliders[2]?.category}`}>
                    <Image src={sliders[2]?.first_image} />
                  </Link>
                  <Tooltip>{sliders[2]?.title}</Tooltip>{" "}
                </SliderWrapper>
              </div>
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>{sliders[2]?.title}</Tooltip>{" "}
                  <Link to={`/categorias/${sliders[2]?.category}`}>
                    <Image src={sliders[2]?.second_image} />
                  </Link>
                  <Tooltip>{sliders[2]?.title}</Tooltip>{" "}
                </SliderWrapper>
              </div>
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>{sliders[2]?.title}</Tooltip>{" "}
                  <Link to={`/categorias/${sliders[2]?.category}`}>
                    <Image src={sliders[2]?.third_image} />
                  </Link>
                  <Tooltip>{sliders[2]?.title}</Tooltip>{" "}
                </SliderWrapper>
              </div>
            </div>
            <div className="section fp-auto-height-responsive">
              <CatOneHome />
              <CatTwoHome />
            </div>
            <div className="section">
              <NewlyContainer>
                <New>Novedades</New>
              </NewlyContainer>
              <Products products={products} />
            </div>
            <div className="section">
              <BottomContainer>
                <NewsLetter />
                <Footer />
              </BottomContainer>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullPageSlider;
