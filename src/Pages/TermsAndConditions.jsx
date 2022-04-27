import Footer from "../components/Footer";
import NavBarFixed from "../components/NavBarFixed";
import NewsLetter from "../components/NewsLetter";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const TermsAndConditions = () => {
  return (
    <>
      <NavBarFixed />
      <Container>
        <Wrapper>
          <h1>Términos y condiciones</h1>
          <Paragraph>
            El Vestidor de Julietta, S.L., con CIF/NIF nº B12439394 y domicilio
            social en Avda de Arcos, Edificio Nuevo Jerez, Bloque 2, Local 4 -
            Jerez de la Frontera (Cádiz), es la empresa propietaria del sitio
            web www.elvestidordejulietta.com.
          </Paragraph>
          <Paragraph>
            El acceso, reproducción y uso de los servicios de la Web requiere la
            aceptación previa de las Condiciones de Uso vigentes en cada
            momento; EL PROPIETARIO se reserva el derecho de modificar dichas
            Condiciones cuando lo considere oportuno, mediante la publicación
            del nuevo texto en la Web.Es responsabilidad del usuario conocer las
            Condiciones de Uso antes de acceder a los productos y servicios de
            la Web; en caso de no estar conforme con las mismas, le rogamos, se
            abstenga de utilizarla.
          </Paragraph>
          <Paragraph>
            <b>PROPIEDAD</b>
          </Paragraph>
          <Paragraph>
            La Web es una obra compuesta de diversos elementos integrados e
            inseparables (texto, ilustraciones, fotografías, imágenes animadas,
            vídeos, programas de ordenador, incluidos los códigos html del sitio
            web, etc.), cuya Propiedad Intelectual le corresponde a EL
            PROPIETARIO, salvo en lo referente a aquellos materiales obtenidos
            bajo licencia de terceros. EL PROPIETARIO y sus licenciantes
            retienen en todo momento la Propiedad Intelectual sobre la Web y
            sobre los distintos elementos que la componen, individualmente
            considerados, en todas las copias que se realicen (cualquiera que
            sea el soporte al que se incorporen), concediendo sobre los mismos
            únicamente los derechos de uso que más adelante se describen.
            Cualquier derecho que no sea expresamente cedido se entiende
            reservado. Además de lo anterior, EL PROPIETARIO es responsable de
            la selección, diseño de la estructura y disposición de los
            contenidos de la Web, así como quien ha tomado la iniciativa y
            asumido el riesgo de efectuar las inversiones sustanciales
            orientadas a la obtención, digitalización y presentación de la
            misma, correspondiéndole, por tanto, la protección que el artículo
            12 y el Título VIII del Libro II de la Ley de Propiedad Intelectual
            pueda conceder sobre el sitio web, considerado como una base de
            datos. EL PROPIETARIO es también el único dueño del diseño e imagen
            gráfica de la Web, reservándose las acciones legales pertinentes que
            le pudieran corresponder contra las personas que realicen
            imitaciones o usos desleales del mismo.
          </Paragraph>
          <Paragraph>
            <b>CREACIÓN DE CUENTA</b>
          </Paragraph>
          <Paragraph>
            La creación de una cuenta en la web implica la lectura y aceptación
            tanto de los términos generales en estos apartados expuestos como la
            aceptación de las condiciones de uso y de las{" "}
            <Link to={"/politicas-privacidad"}>
              <b>políticas de privacidad</b>
            </Link>
            . El no cumplimiento de estas condiciones una vez creada la cuenta
            puede llevar a la suspensión unidireccional del Propietario sin
            previo aviso. Una vez creada una cuenta, la web no contiene un
            mecanismo de revocación o suspensión de la misma. Para tales fines,
            revisa las políticas de privacidad anteriormente expuestas.
          </Paragraph>
          <Paragraph>
            <b>DEVOLUCIONES</b>
          </Paragraph>
          <Paragraph>
            Las devoluciones han de ser solicitadas a través de nuestra web en
            el plazo de 20 días a partir de la fecha de recepción de tu pedido.
            Una vez que recibamos la devolución, verificaremos el buen estado de
            la misma y llevaremos a cabo la devolución del importe en un bono de
            compra, por el mismo importe, que no tendrá fecha de caducidad.
            Recuerda que, si esta devolución la hemos tramitado desde nuestra
            propia mensajería, de ese bono te será descontado el importe del
            envío. Por motivos de higiene no realizamos devoluciones de ningún
            complemento (pendientes, bolsos, cinturones, tocados, pamelas y
            diademas). En caso de que la devolución se realice por una
            incidencia en tu pedido (porque el producto te ha llegado en mal
            estado o no corresponde al pedido realizado) tendrás que notificarlo
            en las 24-48 horas siguientes a la recepción del pedido.
          </Paragraph>
          <Paragraph>
            <b>¿CÓMO HAGO LAS DEVOLUCIONES?</b>
          </Paragraph>
          <Paragraph>
            Cuando realices un pedido, un correo electrónico con los detalles
            del mismo te será enviado. En él figuran tanto el identificador del
            pedido como los de los productos individuales que lo conforman. Si
            no te llega el correo electrónico, puedes contactar con nosotros a
            través de elvestidordejulietta.shop@gmai.com.
            <br />
            Para realizar la devolución, envía un correo electrónico a
            elvestidordejulietta.shop@gmail.com con el asunto “Devolución” y
            adjuntando el identificador del pedido y los identificadores de los
            productos individuales que quieras devolver, así como una breve
            descripción del motivo de la devolución. En un plazo máximo de
            24-48h recibirás un correo con los pasos a seguir, incluída
            dirección de envío y número de referencia de la devolución.
          </Paragraph>
          <Paragraph>
            <b>SERVICIO DE ATENCIÓN AL CLIENTE</b>
          </Paragraph>
          <Paragraph>
            1. - En el teléfono: 956165367 <br /> 2. - A través del whatsapp:
            +34 654 789 456 3.
            <br /> 3.- En el correo electrónico:
            elvestidordejulietta.shop@gmail.com
          </Paragraph>
          <Paragraph>
            <b>PROTECCIÓN DE DATOS</b>
          </Paragraph>
          <Paragraph>
            La información o datos personales que nos facilite serán tratados
            con arreglo a lo establecido en la Política de Privacidad. Al hacer
            uso de esta página web se consiente el tratamiento de dicha
            información y datos y se declara que toda la información o datos que
            nos facilite son veraces y se corresponden con la realidad.
          </Paragraph>
          <Paragraph>
            <b>MODIFICACIONES</b>
          </Paragraph>
          <Paragraph>
            EL PROPIETARIO se reserva el derecho de efectuar, sin previo aviso,
            las modificaciones que considere oportunas en la Web, pudiendo
            cambiar, suprimir o añadir tanto los contenidos y servicios que se
            presten a través de la misma, como la forma en la que éstos
            aparezcan presentados o localizados. Aunque EL PROPIETARIO pondrá
            sus mayores esfuerzos en mantener actualizada y libre de errores la
            información contenida en la Web, no ofrece garantía alguna respecto
            de su exactitud y puesta al día. Tampoco está garantizada la
            obtención de ningún resultado o fin concreto, por lo que el acceso y
            utilización de la Web, es de exclusiva responsabilidad de los
            usuarios y clientes.
          </Paragraph>
          <Paragraph>
            <b>ACCIONES LEGALES</b>
          </Paragraph>
          <Paragraph>
            EL PROPIETARIO perseguirá el incumplimiento de estas Condiciones de
            Uso, así como cualquier utilización indebida de la Web o de sus
            contenidos, las infracciones de los derechos que le correspondan a
            ella o a sus licenciantes, especialmente los de Propiedad
            Intelectual e Industrial, ejercitando todas las acciones, civiles y
            penales, que le puedan corresponder en Derecho.
          </Paragraph>
          <Paragraph>
            <b>LEY APLICABLE Y JURISDICCIÓN</b>
          </Paragraph>
          <Paragraph>
            Para cualquier controversia o conflicto que pudiera surgir, derivado
            de estos términos o condiciones, resultará de aplicación la Ley
            Española. La resolución de los conflictos judiciales se someterá a
            la competencia de los Juzgados y Tribunales del domicilio del
            usuario o cliente.
          </Paragraph>
        </Wrapper>
      </Container>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default TermsAndConditions;
