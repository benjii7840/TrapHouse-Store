import React from "react";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Products from "../components/Products";
import DressStyle from "../components/DressStyle";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section>
      <Hero />
      <Brands />
      <Products />
      <DressStyle />
      <Footer />
    </section>
  );
};

export default Home;
