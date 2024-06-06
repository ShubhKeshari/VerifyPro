import React from "react";
import { Route, Routes } from "react-router-dom";
import { Auth } from "../pages/Auth";
import { Home } from "../pages/Home";
import { MyTrip} from "../pages/MyTrip";
import { PrivateRoute } from "./PrivateRoute";
import { About } from "../pages/About";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/about" element={<About />} />
      <Route path="/mytrip" element={<MyTrip />} />
    </Routes>
  );
};
