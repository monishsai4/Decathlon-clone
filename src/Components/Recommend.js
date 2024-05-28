import React from "react";
import "./Recommend.css";

export default function Recommend() {
  return (
    <div class="container-fluid">
      <p className=" colorme pt-4 m-3"> TRENDING</p>
      <h5 class="m-3"> NEAR YOU </h5>
      <div class="m-3">
        <div class="row ">
          <div class="col ">
            <div class="card">
              <img src="img/Pant.avif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">DOMYOS</h5>
                <p class="card-text">
                  <small>
                    Men's Tshirt Regular Fit For Light Activity Black
                  </small>{" "}
                  <br />
                  $900 <strike>$1600</strike>
                </p>
                <h5 class="styleme text-center">ADD TO CART</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="img/Raincoat.avif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">QUECHUA</h5>
                <p class="card-text">
                  <small>
                    Men's Tshirt Regular Fit For Light Activity Black
                  </small>{" "}
                  <br />
                  $999 <strike>$1999</strike>
                </p>
                <h5 class="styleme text-center">ADD TO CART</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="img/Inner.avif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">NABAIJI</h5>
                <p class="card-text">
                  <small>
                    Men's Tshirt Regular Fit For Light Activity Black
                  </small>{" "}
                  <br />
                  $999 <strike>$1699</strike>
                </p>
                <h5 class="styleme text-center">ADD TO CART</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="img/Shoes.avif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">KALENJI</h5>
                <p class="card-text">
                  <small>
                    Men's Tshirt Regular Fit For Light Activity Black
                  </small>{" "}
                  <br />
                  $799 <strike>$999</strike>
                </p>
                <h5 class="styleme text-center">ADD TO CART</h5>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card">
              <img src="img/Flxpant.avif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">FLX</h5>
                <p class="card-text">
                  <small>
                    Men's Tshirt Regular Fit For Light Activity Black
                  </small>{" "}
                  <br />
                  $699 <strike>$999</strike>
                </p>
                <h5 class="styleme text-center">ADD TO CART</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
