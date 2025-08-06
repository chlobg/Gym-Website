import { useState } from "react";
import Header from "./components/Header&Hero/Header";
import Hero from "./components/Header&Hero/Hero";
import Services from "./components/ServicesSection/Services";
import About from "./components/AboutSection/About";
import NavSports from "./components/AboutSection/NavSports";
import ReviewSection from "./components/AboutSection/ReviewSection";
import ReviewBlock from "./components/AboutSection/ReviewBlock";
import Highligths from "./components/ProgramHighligthsAndPartners/Highligths";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ReviewBlock />
      <Highligths />
      <Pricing />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
