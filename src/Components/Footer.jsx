import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid BigBlack">
      <div class="row p-4">
        <div class="col-md-1"></div>
        <div class="col-md-2 mt-4">
          <ul className="ULME">
            <li className="OLME">FAQ</li>
            <li className="OLME">SIZE GUIDES</li>
            <li className="OLME">HELP/CONTACT US</li>
            <li className="OLME">CLICK & COLLECT</li>
            <li className="OLME">CARRERS</li>

            <li className="OLME">WARRANTY POLICY</li>
            <li className="OLME">
              DECATHLON ACCESSIBLITY <br /> STATEMENT
            </li>
          </ul>
        </div>
        <div class="col-md-2 mt-4">
          <ul className="ULME">
            <li className="OLME">FIND A BIKE DEALER</li>
            <li className="OLME">BECOME A BIKE DEALER</li>
            <li className="OLME">RETURN POLICY</li>
            <li className="OLME">AMBASSADORS</li>
            <li className="OLME">PRIVACY POLICY</li>

            <li className="OLME">TERMS OF SERVICE</li>
          </ul>
        </div>
        <div class="col-md-2 mt-4">
          <ul className="ULME">
            <li className="OLME">ABOUT DECATHLON</li>
            <li className="OLME">SHIPPING INFO</li>
            <li className="OLME">BLOG</li>
            <li className="OLME">PRESS</li>
            <li className="OLME">PRODUCT RECALLS</li>

            <li className="OLME">SUPPLY CHAIN DISCLOSURE</li>
          </ul>
        </div>
        <div class="col-md-4 mt-4">
          <h4 className="GiveW">Get updates from Decathlon.</h4>
          <br />
          <div class="input-container1">
            <input
              type="text2"
              placeholder="Enter your email address"
              id="inputField"
            />
            <button class="submitButton">I'M IN</button>
          </div>
          <br />
          <p>
            By continuing, you agree to Decathlon's Terms and Privacy Policy
          </p>
        </div>
        <div class="col-md-1"></div>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col">
          <div className="DisplayFlex">
            <div className="DisplayPadding">
              <img
                src="Img/I1.png"
                width="26px"
                height="26px"
                alt="instagram"
              />
            </div>
            <div className="DisplayPadding">
              <img src="Img/F1.png" width="26px" height="26px" alt="facebook" />
            </div>
            <div className="DisplayPadding">
              <img src="Img/T1.png" width="26px" height="26px" alt="twitter" />
            </div>
            <div className="DisplayPadding">
              <img src="Img/Y1.png" width="26px" height="26px" alt="youtube" />
            </div>
            <div className="DisplayPadding">
              <p>
                <sub>©Decathlon2024</sub>
              </p>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
}
