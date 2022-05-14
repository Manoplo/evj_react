import {
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookShareButton,
} from "react-share";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "../index.css";

const Container = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialMediaButtons = ({ productName }) => {
  const location = useLocation();
  return (
    <Container>
      <FacebookShareButton
        url={"https://www.elvestidordejulietta.com" + location.pathname}
        quote={productName}
        className="share-icon"
      >
        <FacebookIcon size={32} round bgStyle={{ fill: "black" }} />
      </FacebookShareButton>
      <WhatsappShareButton
        url={"https://www.elvestidordejulietta.com" + location.pathname}
        quote={productName}
        className="share-icon"
      >
        <WhatsappIcon size={32} round bgStyle={{ fill: "black" }} />
      </WhatsappShareButton>
      <TelegramShareButton
        url={"https://www.elvestidordejulietta.com" + location.pathname}
        quote={productName}
        className="share-icon"
      >
        <TelegramIcon size={32} round bgStyle={{ fill: "black" }} />
      </TelegramShareButton>
    </Container>
  );
};

export default SocialMediaButtons;
