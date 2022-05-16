import Footer from "../components/Footer";
import NavBarFixed from "../components/NavBarFixed";
import NewsLetter from "../components/NewsLetter";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Paragraph = styled.p``;

const About = () => {
  return (
    <>
      <NavBarFixed />
      <Container>
        <Wrapper>
          <h1>¿QUÉ ES EL VESTIDOR DE JULIETTA?</h1>
          <Paragraph>
            El Vestidor de Julietta es el la materialización de los sueños de
            emprendimiento de <b>Nuria Rivas</b>, madre de dos pequeños y
            diseñadora de escaparates que había estado trabajando en el mundo
            del retail desde el año 2010. <b>Fue en el año 2018</b> cuando, tras
            haber adquirido experiencia y conocimientos en distintos espacios y
            mercados del mundo de la moda, cuando Nuria decide dar el paso y
            abrir su pequeño negocio en un rinconcito de Jerez, en la provincia
            de Cádiz. Habiendo sufrido el golpe de la pandemia del COVID-19,
            Nuria decidió que era hora de trasladar su pequeño negocio al mundo
            digital.
          </Paragraph>

          <Paragraph>
            <b>De esa idea nace en el año 2022 EVJ</b>, la marca digital de la
            tienda física. Desde nuestro pequeño rincón en Jerez de la Frontera,
            EVJ nos abre la puerta de España y el mundo. Desde aquí, donde
            navegas y nos lees, tú haces posible que el sueño de Nuria se
            cumpla, se haga más grande y se convierta en una realidad.
          </Paragraph>
          <h1>GRACIAS POR CONFIAR EN NOSOTROS.</h1>
        </Wrapper>
      </Container>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default About;
