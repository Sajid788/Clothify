import React, { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import MenPage from "../pages/MenPage";
import WomenPage from "../pages/WomenPage";
import KidPage from "../pages/KidPage";
import SingleProduct from "../pages/SingleProduct";
import CartPage from "../pages/Cart";
import PrivateRoute from "../components/hoc/PrivateRoute";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/men" element={<MenPage />} />
      <Route path="/women" element={<WomenPage />} />
      <Route path="/kids" element={<KidPage />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={ <PrivateRoute>{" "}<CartPage /></PrivateRoute>} />
    </Routes>
  );
};

export default Routing;
