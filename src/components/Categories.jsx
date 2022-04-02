import styled from "styled-components";
/* import { categories } from "../data"; */
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  margin: 0 auto;
  padding: 20px;
  justify-content: space-between;
  gap: 10px;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://elvestidordejulietta.test/api/v1/categories"
      );
      setCategories(result.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
