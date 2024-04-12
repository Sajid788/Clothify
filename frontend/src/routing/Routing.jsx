import React, { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
