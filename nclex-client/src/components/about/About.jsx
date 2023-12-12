import React from "react";
import "./about.css";
import Back from "../common/back/Back";
import AboutCard from "./AboutCard";
import Header from "../common/header/Header";
import Footer from "../common/web-footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <Back title="About Us" />
      <AboutCard />
      <Footer />
    </>
  );
};

export default About;
