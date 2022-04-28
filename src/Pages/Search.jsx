import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import {
  useLocation,
  useSearchParams,
  Link,
  useNavigate,
} from "react-router-dom";
import NavBarFixed from "../components/NavBarFixed";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { searchProducts } from "../services/searchService";
import debounce from "lodash.debounce";
import { mobile } from "../responsive";
import { GiHanger } from "react-icons/gi";

const Container = styled.div`
  padding-top: 50px;
  width: 90%;
  height: auto;
  margin: 0 auto;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid lightgray;
  width: 90%;
  font-size: 28px;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  &:focus {
    outline: none;
    border-bottom: 2px solid lightpink;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 28px;
  cursor: pointer;
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 50vh;
  margin-top: 50px;
  margin-bottom: 50px;
  gap: 15px;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: "30px",
  })}
`;

const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  cursor: pointer;
  ${mobile({ width: "100%" })}
`;

const ImageCardContainer = styled.img`
  width: 100%;
  max-height: 70%;
  object-fit: cover;
`;

const CardTitle = styled.span`
  font-size: 12px;
  font-weight: 800;

  border: 1px solid lightpink;
  padding: 10px;
  margin-top: 10px;
`;

const NoResults = styled.div`
  display: flex;
  justify-content: center;
  font-size: 22px;
  font-weight: 200;
  gap: 10px;
  margin-top: 50px;
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e?.target;
    setSearchParams({ [name]: value });
    setQuery(value);
  };
  const debouncedSearch = useMemo(() => {
    return debounce(onChange, 500);
  }, []);

  /* const fetchResults = async () => { */

  useEffect(() => {
    if (query) {
      searchProducts(query).then((res) => {
        setResults(res);
        console.log(res);
      });
    }
  }, [query]);

  return (
    <>
      <NavBarFixed />
      <Container>
        <InputRow>
          <Input
            type="text"
            placeholder="INTRODUCE TU BÚSQUEDA"
            name="searchTerm"
            onChange={debouncedSearch}
          />
          {/* {query.length > 0 && (
            <Button
              onClick={() => {
                setQuery("");
              }}
            >
              X
            </Button>
          )} */}
        </InputRow>
        <ResultsWrapper>
          {query.length > 0 && results.length === 0 ? (
            <NoResults>
              No se han encontrado resultados con los parámetros "{query}"
              <GiHanger />
            </NoResults>
          ) : (
            results.map((result, index) => (
              <ResultCard
                onClick={() =>
                  navigate(`/categorias/${result.category.slug}/${result.id}`)
                }
                key={index}
              >
                <ImageCardContainer src={result.image} />

                <CardTitle>
                  {result.name.toUpperCase()} - {result.price}€
                </CardTitle>
              </ResultCard>
            ))
          )}
        </ResultsWrapper>
      </Container>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Search;
