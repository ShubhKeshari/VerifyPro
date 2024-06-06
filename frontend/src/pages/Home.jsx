import React from "react";
import { Hero } from "../components/Hero";
import { Testimonals } from "../components/Testimonals";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";

const Home=()=> {
  return (
    <>
      <Hero />
      <Features />
      <Testimonals />
      <Footer />
    </>
  );
}

export { Home };
