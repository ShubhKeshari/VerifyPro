import React from "react";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";
import { AllRoutes } from "./routes/AllRoutes";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
};

export default App;
