import React from "react";
import "./UpperC.css";
import Quechua from "../Pages/Product/Quechua";
import { Link, Routes, Route } from "react-router-dom";

export default function UpperC() {
  return (
    <div>
      <div className="container-flex">
        <img
          src="Img/24-Spring-HP-Banners-Duffels-Desktop_1440x526.webp"
          alt="Wallpaper"
          width="100%"
          className="Imgme"
        />
        <div class="centered text-center">
          <h4 class="TextColor">Spring Essentials</h4>
          <p className="COlor">Duffel bags, tents, packs, and more!</p>
          <Link to="/Quechua">
            <button class="btn-prim">Shop Now</button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="Quechua" element={<Quechua />} />
      </Routes>
    </div>
  );
}
