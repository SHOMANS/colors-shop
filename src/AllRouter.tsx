import { Route, Routes } from "react-router-dom";

import { lazy, useEffect, useState } from "react";
import Loadable from "./components/Loadable";
import { adminRoutes } from "./Route/Admin";
import { userRoutes } from "./Route/user";
import NotFound from "./pages/ErrorPages/NotFound";
import NotFoundPage from "./pages/NotFoundPage";
import { useSelector } from "react-redux";
import { AppState } from "./redux/store";

const Signup = Loadable(lazy(() => import("./pages/Auth/Signup")));
const Login = Loadable(lazy(() => import("./pages/Auth/Login")));
const Product = Loadable(lazy(() => import("./pages/Gest/ProductDetails")));
const Home = Loadable(lazy(() => import("./pages/Gest/Home")));
const Search = Loadable(lazy(() => import("./pages/Gest/Search")));
const Category = Loadable(lazy(() => import("./pages/Gest/Category")));
const AllProducts = Loadable(lazy(() => import("./pages/Gest/AllProducts")));

export const AllRouter = () => {
  const user = useSelector((state: AppState) => state.user);

  const [rule, setRule] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    setRule(
      Boolean(localStorage.getItem("role")) ||
        (user.myProfile.user?.isAdmin as boolean)
    );
    setToken(
      localStorage.getItem("token") || (user.myProfile.user?.token as string)
    );
  }, [rule, user.myProfile?.user?.isAdmin, user.myProfile?.user?.token]);

  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/category/:name" element={<Category />} />
      <Route path="/allProducts" element={<AllProducts />} />
      <Route path="/search" element={<Search />} />
      {adminRoutes(rule)}
      {userRoutes(token)}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
