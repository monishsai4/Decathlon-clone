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
import Signup from "../src/Pages/Login/Signup";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function App() {
  return (
    <>
      <div class="container-fluid SmallBlack">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <p className="SmallBlackHeight one-line-only">
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
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <input type="text1" class="SearchBar" placeholder="Search" />
              </li>
              <li class="nav-item">
                {" "}
                <button class="btn  btn-img">
                  <Link to="/Cart">
                    <img
                      src="Img/Bag.png"
                      alt="Button"
                      width="10"
                      height="10"
                    />
                  </Link>
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
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}
