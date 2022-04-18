import Producto from "./Pages/Producto";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import CategoriesList from "./Pages/CategoriesList";
import Category from "./Pages/Category";
import Success from "./Pages/Success";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./Pages/Profile";
import Guard from "./components/guards/Guard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />

        <Route path="categorias" element={<CategoriesList />} />
        <Route path="categorias/:categorySlug" element={<Category />} />
        <Route
          path="categorias/:categorySlug/:productId"
          element={<Producto />}
        />
        <Route path="registro" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<Success />} />
        <Route element={<Guard pathname="/" />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
