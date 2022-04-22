import styled from "styled-components";
import NavBarFixed from "../components/NavBarFixed";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bookmarks } from "@material-ui/icons";
import axios from "axios";
import authHeader from "../services/auth-header";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
  width: 85%;
  min-height: 85vh;
  margin: auto;
  margin-bottom: 45px;
`;

const Header = styled.div`
  display: flex;
  width: 85%;
  margin: auto;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

const OnlyRegistered = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 22px;
  margin-top: 5vh;
  font-weight: 100;
`;
const OnlyRegisteredMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 22px;
  margin-top: -500px;
  font-weight: 100;
`;

const WhishlistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  /* border: 1px solid gray; */
`;

const WhishlistProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20%;
  min-height: 1vh;
  /* border: 1px solid gray; */
  ${mobile({
    width: "100%",
  })}
`;

const Image = styled.img`
  width: 100%;
  max-height: 120%;
  object-fit: cover;
`;

const CardFooter = styled.div`
  display: flex;
  width: 100%;
`;
const Name = styled.span`
  font-size: 16px;
  font-weight: 800;
  margin: 20px 0 0 10px;
  font-family: "Urbanist", serif;
  font-style: italic;
  text-align: center;
`;

const Whishlist = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [wishlist, setWishlist] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setIsLogged(true);
        try {
          const response = await axios(
            `http://elvestidordejulietta.test/api/v1/whishlist/${user.user.id}`,
            {
              headers: authHeader(),
            }
          );
          console.log(response.data);
          setWishlist(response.data[0].products);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBarFixed />

      <Header>
        <Bookmarks />
        <Title>Lista de deseos</Title>
      </Header>
      <Wrapper>
        {isLogged ? (
          <>
            {wishlist.length > 0 ? (
              <WhishlistContainer>
                {wishlist.map((product) => (
                  <WhishlistProduct key={product.id}>
                    <Link
                      to={`/categorias/${product.category_name}/${product.id}`}
                    >
                      <Image src={product.image} />
                    </Link>
                    <CardFooter>
                      <Name>{product.name}</Name>
                    </CardFooter>
                  </WhishlistProduct>
                ))}
              </WhishlistContainer>
            ) : (
              <OnlyRegistered>
                Aún no has seleccionado nada para tu lista de deseos.
              </OnlyRegistered>
            )}
          </>
        ) : (
          <OnlyRegisteredMessage>
            Sólo los usuarios registrados pueden guardar productos en la lista
            de deseos.
          </OnlyRegisteredMessage>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Whishlist;
