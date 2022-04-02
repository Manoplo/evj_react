import Producto from "./Pages/Producto";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import CategoriesList from "./Pages/CategoriesList";
import Category from "./Pages/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        {/* <Route path="productos" element={<ProductList />} />
        <Route path="productos/:productId" element={<Producto />} /> */}

        <Route path="categorias" element={<CategoriesList />} />
        <Route path="categorias/:categorySlug" element={<Category />} />
        <Route
          path="categorias/:categorySlug/:productId"
          element={<Producto />}
        />
        <Route path="registro" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
