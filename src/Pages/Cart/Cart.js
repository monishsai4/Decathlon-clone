import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Footer from "../../Components/Footer";
import "./Cart.css";
import Home from "../Home/Home";

export default function Cart() {
  return (
    <>
      <div class="container-fluid  WhichColor">
        <div class="row">
          <div class="col-2"></div>
          <div class="col">
            <div>
              <h4 className="WhichFont">Shopping Cart</h4>
              <div className="WhichPad">
                <div class="row">
                  <div class="col-md-7">
                    <h4>Your shopping cart is empty.</h4>
                    <p>Fill it up and enjoy free shipping on orders over $49</p>
                  </div>
                  <div class="col-md-5">
                    <Link to="/">
                      <button class=" btn-fill">CONTINUE SHOPPING</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
      </div>

      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
