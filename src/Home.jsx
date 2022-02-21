import React from "react";
import Web from "../src/Images/image2.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Welcome to"
        imgsrc={Web}
        visit="/products"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
