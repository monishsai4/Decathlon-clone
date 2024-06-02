import Carousal from "../../Components/Carousel";
import UpperC from "../../Components/UpperC";
import FourCards from "../../Components/FourCards";
import SecondC from "../../Components/SecondC";
import Carousal1 from "../../Components/Carousel1";
import Recommend from "../../Components/Recommend";
import Slott from "../../Components/Slott";
import Footer from "../../Components/Footer";
import React from "react";

export default function App() {
  return (
    <div>
      <UpperC />
      <FourCards />
      <Carousal />

      <SecondC />
      <Carousal1 />
      <Recommend />
      <Slott />
      <Footer />
    </div>
  );
}
