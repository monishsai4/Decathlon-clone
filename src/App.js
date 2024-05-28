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

export default function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container d-flex justify-content-between align-items-center">
          <a class="navbar-brand" href="/">
            <img
              src="Img/Decathlon-Logo-New.png"
              width="165"
              height="45"
              alt="DecathlonLogo"
            />
          </a>
          {/* <div class="d-flex flex-grow-1 justify-content-center me-5">
            <h5 class="navbar-heading me-5"></h5>
          </div> */}
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
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li class="nav-item me-5 dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Products
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/Kiprun" className="dropdown-item">
                      Kiprun
                    </Link>
                  </li>
                  <li>
                    <Link to="/Domyos" className="dropdown-item">
                      Domyos
                    </Link>
                  </li>
                  <li>
                    <Link to="/Quechua" className="dropdown-item">
                      Quechua
                    </Link>
                  </li>
                  <li>
                    <Link to="/Btwin" className="dropdown-item">
                      Btwin
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-5">
                <Link to="/Contact" className="nav-link">
                  ContactUs
                </Link>
              </li>
              <li class="nav-item me-1">
                <Link to="/Login" className="nav-link">
                  SignIn
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={customSearchInputStyle}
              />
              <button
                class="btn btn-outline-success me-5"
                type="submit"
                style={customSearchButtonStyle}
              >
                Search
              </button>
            </form>
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

const customSearchInputStyle = {
  width: "270px", // Adjust the width as needed
  height: "43px",
};
const customSearchButtonStyle = {
  width: "80px", // Adjust the width as needed
  height: "42px",
};
