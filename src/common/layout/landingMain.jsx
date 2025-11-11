import React from "react";
import Card from "../../components/layout/card";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import Hero from "../../components/layout/hero";
import Section from "../../components/layout/section";
import Section_AI from "../../components/layout/section_ai";
const LandingMain = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section />
      <Section_AI />
      <Card />
      <Footer />
    </>
  );
};
export default LandingMain;
