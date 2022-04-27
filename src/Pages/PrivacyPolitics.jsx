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

const PrivacyPolitics = () => {
  return (
    <>
      <NavBarFixed />
      <Container>
        <Wrapper>
          <h1>Políticas de privacidad: </h1>
          <Paragraph>
            El Vestidor de Julietta, S.L., en aplicación de la normativa vigente
            en materia de protección de datos de carácter personal, informa que
            los datos personales que se recogen a través de los formularios del
            Sitio web: https://www.elvestidordejulietta.com, se incluyen en los
            ficheros automatizados específicos de usuarios de los servicios de
            El Vestidor de Julietta, S.L.
          </Paragraph>
          <Paragraph>
            La recogida y tratamiento automatizado de los datos de carácter
            personal tiene como finalidad el mantenimiento de la relación
            comercial y el desempeño de tareas de información, formación,
            asesoramiento y otras actividades propias de El Vestidor de
            Julietta, S.L. Estos datos únicamente serán cedidos a aquellas
            entidades que sean necesarias con el único objetivo de dar
            cumplimiento a la finalidad anteriormente expuesta.
          </Paragraph>
          <Paragraph>
            El Vestidor de Julietta, S.L. adopta las medidas necesarias para
            garantizar la seguridad, integridad y confidencialidad de los datos
            conforme a lo dispuesto en el Reglamento (UE) 2016/679 del
            Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a
            la protección de las personas físicas en lo que respecta al
            tratamiento de datos personales y a la libre circulación de los
            mismos, y derogando la antigua LOPD, la nueva Ley Orgánica 3/2018,
            de 5 diciembre, de Protección de Datos y Garantía de los Derechos
            Digitales (LOPDGDD).
          </Paragraph>
          <Paragraph>
            El usuario podrá en cualquier momento ejercitar los derechos de
            acceso, oposición, rectificación, cancelación, limitación y
            portabilidad reconocidos en el citado Reglamento (UE). El ejercicio
            de estos derechos puede realizarlo el propio usuario a través de
            email a: elvestidordejulietta.shop@gmail.com o en la dirección: Avda
            de Arcos, Edificio Nuevo Jerez, Bloque 2, Local 4 - Jerez de la
            Frontera (Cádiz).
          </Paragraph>
          <Paragraph>
            El usuario manifiesta que todos los datos facilitados por él son
            ciertos y correctos, y se compromete a mantenerlos actualizados,
            comunicando los cambios a El Vestidor de Julietta, S.L.
          </Paragraph>
          <Paragraph>
            <b>¿Con qué finalidad trataremos tus datos personales?</b>
          </Paragraph>
          <Paragraph>
            1.- Dar cumplimiento de las obligaciones, comerciales, laborales,
            corporativas y contables de la empresa.
            <br /> 2.- Prestar sus servicios de acuerdo con las necesidades
            particulares de los clientes, con el fin de cumplir los contratos
            suscritos por la misma. <br />
            3.- Envío de información comercial y boletines sobre nuevos
            servicios ofrecidos en la web y del sector. <br />
            4.- Adquirir los productos ofrecidos a través de la página web.{" "}
            <br />
            5.- Prestar los servicios contratados por el usuario.
            <br />
            6.- Enviar información promocional vía electrónica.
            <br />
            7.-Facilitar la información solicitada por el usuario a través del
            formulario de contacto.
          </Paragraph>
          <Paragraph>
            <b>
              ¿Por cuánto tiempo se conservan los datos personales recabados?
            </b>
          </Paragraph>
          <Paragraph>
            Los datos personales proporcionados se conservarán mientras se
            mantenga la relación comercial o no solicites su supresión y durante
            el plazo por el cuál pudieran derivarse responsabilidades legales
            por los servicios prestados.
          </Paragraph>
          <Paragraph>
            <b>
              ¿Puedo ejercer mis derechos de acceso, rectificación, cancelación
              y oposición?
            </b>
          </Paragraph>
          <Paragraph>
            Si desea ejercer alguno de los derechos de acceso, rectificación,
            cancelación y oposición de los datos personales que nos ha
            facilitado, puede dirigirse a nuestra dirección de correo
            electrónico: elvestidordejulietta.shop@gmail.com
          </Paragraph>
          <Paragraph>
            <b>Cancelación de la cuenta</b>
          </Paragraph>
          <Paragraph>
            La cancelación de una cuenta implica que el usuario perderá toda la
            información relativa a sus pedidos, historiales y compras. El
            usuario podrá solicitar la cancelación de su cuenta enviando un
            correo electrónico a: elvestidordejulietta.shop@gmail.com. La
            cancelación de la cuenta no implica la eliminación de los datos
            personales registrados en la misma. El Vestidor de Julietta, S.L.
            conservará dichos datos para fines de investigación y de
            cumplimiento de las obligaciones legales.
          </Paragraph>
        </Wrapper>
      </Container>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default PrivacyPolitics;
