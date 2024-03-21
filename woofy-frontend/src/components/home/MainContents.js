import React from "react";
import NavBar from "../navbar/NavBar";
import BestContents from "./BestContents";
import MiddleContents from "./MiddleContents";
import Footer from "./Footer";
import Banner from "./Banner";

const MainContents = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <BestContents />
      <MiddleContents />
      <Footer />
    </div>
  );
};

export default MainContents;
