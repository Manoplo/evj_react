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
import AdminGuard from "./components/guards/AdminGuard";
import Whishlist from "./Pages/Whishlist";
import NotFound from "./components/NotFound";
import PrivacyPolitics from "./Pages/PrivacyPolitics";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Search from "./Pages/Search";
import Dashboard from "./admin/pages/Dashboard";

import SingleOrder from "./admin/components/SingleOrder";
import New from "./admin/components/New";
import Edit from "./admin/components/Edit";
import ProductList from "./admin/components/ProductList";

import OrderList from "./admin/components/OrderList";
import UsersList from "./admin/components/UsersList";
import SingleUser from "./admin/components/SingleUser";
import AdminLogin from "./admin/pages/AdminLogin";
import UusersList from "./admin/components/UusersList";
import SingleUuser from "./admin/components/SingleUuser";
import CategoryAdmin from "./admin/components/CategoryAdmin";
import Sliders from "./admin/components/Sliders";
import Options from "./admin/components/Options";
import Subscriptions from "./admin/components/Subscriptions";
import Stats from "./admin/components/Stats";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import CookiesPolicy from "./Pages/CookiesPolicy";

import About from "./Pages/About";

function App() {
  return (
    <>
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
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<Success />} />
          <Route element={<Guard pathname="/login" />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="search" element={<Search />} />
          <Route path="whishlist" element={<Whishlist />} />
          <Route path="politicas-privacidad" element={<PrivacyPolitics />} />
          <Route
            path="terminos-y-condiciones"
            element={<TermsAndConditions />}
          />
          <Route path="cookies" element={<CookiesPolicy />} />
          <Route path="acerca" element={<About />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route element={<AdminGuard pathname="/admin/login" />}>
            <Route path="admin/dashboard">
              <Route index element={<Dashboard />} />
              <Route path="products">
                <Route index element={<ProductList />} />
                <Route path="new" element={<New />} />
                <Route path="edit/:productId" element={<Edit />} />
                <Route
                  path="category/:categorySlug"
                  element={<CategoryAdmin />}
                />
              </Route>
              <Route path="orders">
                <Route index element={<OrderList />} />
                <Route path=":orderId" element={<SingleOrder />} />
              </Route>
              <Route path="users">
                <Route index element={<UsersList />} />
                <Route path=":userId" element={<SingleUser />} />
              </Route>
              <Route path="uusers">
                <Route index element={<UusersList />} />
                <Route path=":uuserId" element={<SingleUuser />} />
              </Route>
              <Route path="sliders">
                <Route index element={<Sliders />} />
              </Route>
              <Route path="subscriptions">
                <Route index element={<Subscriptions />} />
              </Route>
              <Route path="options">
                <Route index element={<Options />} />
              </Route>
              <Route path="stats">
                <Route index element={<Stats />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
