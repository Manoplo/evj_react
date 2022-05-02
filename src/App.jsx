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
import Whishlist from "./Pages/Whishlist";
import NotFound from "./components/NotFound";
import PrivacyPolitics from "./Pages/PrivacyPolitics";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Search from "./Pages/Search";
import Dashboard from "./admin/pages/Dashboard";
import List from "./admin/components/ProductList";
import SingleOrder from "./admin/components/SingleOrder";
import New from "./admin/components/New";
import Edit from "./admin/components/Edit";
import ProductList from "./admin/components/ProductList";
import SingleProduct from "./admin/components/SingleProduct";
import OrderList from "./admin/components/OrderList";
import UsersList from "./admin/components/UsersList";
import SingleUser from "./admin/components/SingleUser";

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
        <Route path="search" element={<Search />} />
        <Route path="whishlist" element={<Whishlist />} />
        <Route path="politicas-privacidad" element={<PrivacyPolitics />} />
        <Route path="terminos-y-condiciones" element={<TermsAndConditions />} />
        <Route path="admin/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path=":productId" element={<SingleProduct />} />
            <Route path="new" element={<New />} />
            <Route path="edit" element={<Edit />} />
          </Route>
          <Route path="orders">
            <Route index element={<OrderList />} />
            <Route path=":orderId" element={<SingleOrder />} />
          </Route>
          <Route path="users">
            <Route index element={<UsersList />} />
            <Route path=":userId" element={<SingleUser />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
