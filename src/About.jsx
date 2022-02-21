import React from "react";
import Web from "../src/Images/image3.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={Web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
};

export default About;
