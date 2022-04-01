import ReactFullpage from "@fullpage/react-fullpage";
import Categories from "./Categories";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import Products from "./Products";
import styled from "styled-components";
import { mobile } from "../responsive";

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Image = styled.img`
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "100vh" })}
`;

const Tooltip = styled.span`
  font-size: 18px;
  color: black;
`;

const FullPageSlider = ({ children }) => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      controlArrows={true}
      navigation={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>Vestidos</Tooltip>
                  <Image src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" />
                  <Tooltip>Vestidos</Tooltip>
                </SliderWrapper>
              </div>
              <div className="slide">
                <SliderWrapper>
                  <Image src="https://images.pexels.com/photos/7446537/pexels-photo-7446537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </SliderWrapper>
              </div>
            </div>
            <div className="section">
              <div className="slide">
                <SliderWrapper>
                  <Image src="https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                </SliderWrapper>
              </div>
              <div className="slide">
                <SliderWrapper>
                  <Image src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                </SliderWrapper>
              </div>
            </div>
            <div className="section">
              <Categories />
            </div>
            <div className="section">
              <Products />
            </div>
            <div className="section">
              <NewsLetter />
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullPageSlider;
