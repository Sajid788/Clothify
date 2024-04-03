import React, { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default Routing;
