import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Btwin from "./Pages/Product/Btwin";
import Quechua from "./Pages/Product/Quechua";
import Kiprun from "./Pages/Product/Kiprun";
import Domyos from "./Pages/Product/Domyos";
import "./App.css";

export default function App() {
  const Color = {
    color: "black",
  };
  return (
    <>
      <div class="container-fluid SmallBlack">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <p className="SmallBlackHeight">
              Free Shipping | Click and Collect
            </p>
          </div>
          <div class="col SmallBlackLeft">
            <img src="Img/Male.png" alt="Male" width="18px" height="18px" />

            <p className="PadLeft">
              <Link to="/Login" className="nav-link">
                SignIn
              </Link>
            </p>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav  mb-2 mb-lg-0" style={Color}>
              <li class="nav-item me-5">
                <Link to="/Kiprun" className="nav-link">
                  Running
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link to="/Domyos" className="nav-link">
                  Lifting
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link to="/Quechua" className="nav-link">
                  Hiking
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link to="/Btwin" className="nav-link">
                  Cycling
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link to="/Contact" className="nav-link">
                  ContactUs
                </Link>
              </li>
            </ul>
          </div>
          <div class="mx-auto order-0">
            <a class="navbar-brand" href="/">
              <img
                src="Img/Decathlon-Logo-New.png"
                width="165"
                height="45"
                alt="DecathlonLogo"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".dual-collapse2"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2 LeftMe">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <input type="text1" class="SearchBar" placeholder="Search" />
              </li>
              <li class="nav-item">
                {" "}
                <button class="btn  btn-img">
                  <img src="Img/Bag.png" alt="Button" width="10" height="10" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Btwin" element={<Btwin />} />
        <Route path="/Quechua" element={<Quechua />} />
        <Route path="/Domyos" element={<Domyos />} />
        <Route path="/Kiprun" element={<Kiprun />} />
      </Routes>
    </>
  );
}
