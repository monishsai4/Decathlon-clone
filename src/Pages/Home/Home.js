import Carousal from "../../Components/Carousel";
import UpperC from "../../Components/UpperC";
import FourCards from "../../Components/FourCards";
import SecondC from "../../Components/SecondC";
import Recommend from "../../Components/Recommend";
import Slott from "../../Components/Slott";
import Footer from "../../Components/Footer";
import React from "react";

export default function Home() {
  return (
    <div>
      <UpperC />
      <FourCards />
      <Carousal />
      <SecondC />
      <Recommend />
      <Slott />
      <Footer />
    </div>
  );
}
