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

const CookiesPolicy = () => {
  return (
    <>
      <NavBarFixed />
      <Container>
        <Wrapper>
          <h1>Políticas de Cookies: </h1>
          <Paragraph>
            El Vestidor de Julietta, S.L., en aplicación de la normativa vigente
            en materia de protección de datos de carácter personal, informa que
            esta web usa cookies propias para mejorar la navegación y los
            servicios. El uso de la web lleva implícito el uso de cookies y su
            aceptación.
          </Paragraph>
          <Paragraph>
            <b>¿Qué cookies usa esta web?</b>
          </Paragraph>
          <Paragraph>
            El Vestidor de Julietta únicamente utiliza tres tipos de cookies:
            <ul>
              <li>
                Cookies de sesión: son aquellas que se borran al cerrar el
                navegador.
              </li>
              <li>
                Cookies persistentes: son aquellas que permanecen en el disco
                duro del ordenador del usuario y se borran cuando se cierra el
                navegador.
              </li>
              <li>
                Cookies de preferencia: son aquellas que se borran al cerrar el
                navegador, pero que permiten al usuario elegir si desea o no
                recibir cookies en el futuro.
              </li>
            </ul>
          </Paragraph>
          <Paragraph>
            Expuestos los tipos de cookies, El Vestidor de Julietta usa:
            <ul>
              <li>
                Una cookie que almacena la información de la sesión del usuario
                de manera que no se pierde ningún dato al cerrar el navegador.
              </li>
              <li>
                Una cookie usada por la pasarela de pago Stripe para otorgar al
                usuario una id única por sesión, de modo que la compra de
                productos sea segura.
              </li>
              <li>
                Cookies usadas por Google Analytics para recopilar información
                sobre el uso de la web.
              </li>
            </ul>
            El uso de El Vestidor de Julietta obliga, para su correcto
            funcionamiento, a aceptar estas cookies. Nuestra política es
            minimizar el uso de cookies, de manera que se obtengan sólo los
            datos necesarios para el correcto funcionamiento de la web. Gracias
            por confiar en nosotros.
          </Paragraph>
          <Paragraph>Gracias por confiar en nosotros.</Paragraph>
        </Wrapper>
      </Container>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default CookiesPolicy;
