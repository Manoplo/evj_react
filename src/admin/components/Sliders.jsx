import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import SliderRow from "./SliderRow";
import { useEffect, useState, useRef } from "react";

const MainContainer = styled.div`
  display: flex;
`;

const DashBoardContainer = styled.div`
  flex: 6;
`;

const FirstRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  /*  border: 1px solid lightgray; */
  width: 95%;
  height: 40vh;
  margin: 25px auto;
  gap: 10px;
`;

const SliderContainer = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid lightgray;
  justify-content: center;
  padding: 10px;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Hr = styled.hr``;

const mock = [
  {
    id: 1,
    title: "Vestidos",
    first_image:
      "https://images.unsplash.com/photo-1632262049811-86d23941618b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2156&q=80",
    second_image:
      "https://images.unsplash.com/photo-1617277636244-096222054deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    third_image:
      "https://images.unsplash.com/photo-1622200718646-ab5a7e523c49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "vestidos",
  },
];

const Sliders = () => {
  /* const [sliders, setSliders] = useState([]);
  const [firstSlider, setFirstSlider] = useState(null);
  const [secondSlider, setSecondSlider] = useState(null);
  const [thirdSlider, setThirdSlider] = useState(null);
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);

  const handleFirst = (e) => {
    inputRef.current.click();
  };

  const handleSecond = (e) => {
    secondInputRef.current.click();
  };
  const handleThird = (e) => {
    thirdInputRef.current.click();
  };

  useEffect(() => {
    console.log(firstSlider, secondSlider, thirdSlider);
  }, [firstSlider, secondSlider, thirdSlider]); */

  return (
    <MainContainer>
      <Sidebar />
      <DashBoardContainer>
        <Navbar />
        <SliderRow id={1} />
        <SliderRow id={2} />
        <SliderRow id={3} />
        {/* <FirstRowContainer>
          <SliderContainer onClick={handleFirst}>
            <Image
              src={
                firstSlider
                  ? URL.createObjectURL(firstSlider)
                  : mock[0].first_image
              }
            />
            <input
              ref={inputRef}
              onChange={(e) => setFirstSlider(e.target.files[0])}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </SliderContainer>
          <SliderContainer onClick={handleSecond}>
            <Image
              src={
                secondSlider
                  ? URL.createObjectURL(secondSlider)
                  : mock[0].second_image
              }
            />
            <input
              ref={secondInputRef}
              onChange={(e) => setSecondSlider(e.target.files[0])}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </SliderContainer>
          <SliderContainer onClick={handleThird}>
            <Image
              src={
                thirdSlider
                  ? URL.createObjectURL(thirdSlider)
                  : mock[0].third_image
              }
            />
            <input
              ref={thirdInputRef}
              onChange={(e) => setThirdSlider(e.target.files[0])}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </SliderContainer>
        </FirstRowContainer> */}
        <Hr />
      </DashBoardContainer>
    </MainContainer>
  );
};

export default Sliders;
