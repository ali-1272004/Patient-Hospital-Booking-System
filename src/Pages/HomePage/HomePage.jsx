import React from "react";

import Hero from "../../Components/Hero/Hero";
import Stats from "../../Components/Stats/Stats";
import About from "../../Components/About/About";
import Departments from "../../Components/Departments/Departments";
import WhyChooseUs from "../../Components/Choose/WhyChooseUs";
// import Footer from '../../Components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Departments />
      <WhyChooseUs />
      {/* <Footer /> */}
    </>
  );
};
export default HomePage;
