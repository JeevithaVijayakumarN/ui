import React, { useContext } from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import AdminProducts from "./components/productcomponent/AdminProducts";
import AdminCategory from "./components/categorycomponent/AdminCategory";
import AdminUser from "./components/AdminUser";
import AddProduct from "./components/productcomponent/AddProduct";
import AddCategory from "./components/categorycomponent/AddCategory";
import UserHome from "./pages/UserHome";
import ProtectedRoutes from "./utils/ProtectedRoutes";

import { UserContext } from "./context/UserContext";

const App = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes auth={loggedInUser.isLoggedIn} />}>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/adminproduct" element={<AdminProducts />} />
          <Route path="/admincategory" element={<AdminCategory />} />
          <Route path="/adminuser" element={<AdminUser />} />
          <Route path="/addproducts" element={<AddProduct />} />
          <Route path="/addcategories" element={<AddCategory />} />
          <Route path="/userpage" element={<UserHome />} />
        </Route>
      </Routes>
      ,
    </>
  );
};

export default App;
