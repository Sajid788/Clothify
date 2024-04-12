import React, { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage";
import Signup from "../pages/Signup";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routing;
