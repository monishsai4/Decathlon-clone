import React from "react";

export default function Footer() {
  return (
    <div className="bg-body-tertiary">
      <div class="container ">
        <div class="row">
          <div class="col-sm-3 text-center ">
            <div className="p-3 my-2">
              <img
                src="Img/Decathlon-Logo.png"
                width="195"
                height="110"
                alt="DecathlonLogo"
              />
            </div>
            <div class="container ">
              <p className="mt-4 text-center">
                <b>
                  <small>
                    <>EXPERIENCE DECATHLON APP ON MOBILE</>
                  </small>
                </b>
              </p>
              <div class="row">
                <div class="col">
                  <img
                    src="Img/GPLAY.webp"
                    width="130"
                    height="43"
                    alt="DecathlonLogo"
                  />
                </div>
                <div class="col">
                  <img
                    src="Img/APPSTORE.svg"
                    width="130"
                    height="43"
                    alt="DecathlonLogo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-9 p-4">
            <div class="container">
              <div class="row">
                <div class="col">
                  <p>
                    <b>SUPPORT</b>
                  </p>
                  <p>Contact our Stores</p>
                  <p>Delivery</p>
                </div>
                <div class="col">
                  <p>
                    <b>OUR SERVICES</b>
                  </p>
                  <p>Decathlon for School</p>
                  <p>Decathlon for Corporates</p>
                  <p>Decathlon for Sport clubs</p>
                  <p>Decathlon Gift cards</p>
                  <p>Installation & assembly services</p>
                </div>
                <div class="col">
                  <p>
                    <b>ABOUT US</b>
                  </p>
                  <p>Who we are</p>
                  <p>Careers</p>
                  <p>Made in India</p>
                </div>
                <div class="col">
                  <p>
                    <b>LEGAL</b>
                  </p>
                  <p>Return POlicy</p>
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
