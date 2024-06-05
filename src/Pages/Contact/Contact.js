import React from "react";
import Footer from "../../Components/Footer";

export default function Contact() {
  const Carousme = {
    backgroundColor: "#3543BA",
    width: "100%",
    height: "250px",
    color: "white",
  };
  const BgColor = {
    backgroundColor: "#3543BA",
    color: "#FFFFFF",
  };
  const MainDiv = {
    backgroundColor: "#FFFFFF",
    height: "500px",
    color: "black",
  };
  const padm = {
    height: "200px",
  };

  return (
    <>
      <div
        class="container-fluid d-flex justify-content-center align-items-center"
        style={Carousme}
      >
        <div className="text-center">
          <h3>If you faced any problems in shopping.</h3>
          <p>Drop in us a message</p>
        </div>
      </div>
      <div class="container-fluid text-center" style={MainDiv}>
        <div className="text-center mt-5">
          <h2>Get in Touch</h2>
        </div>
        <div className="text-center mt-3">
          <p>Let's talk about your thoughts </p>
        </div>
        <div class="row mt-4">
          <div class="col-2"></div>
          <div class="col-md">
            <input
              class="form-control"
              type="text"
              placeholder="Your name"
              aria-label="default input example"
            />
          </div>
          <div class="col-md">
            <input
              class="form-control"
              type="text"
              placeholder="Your phone number"
              aria-label="default input example"
            />
          </div>
          <div class="col-md">
            <input
              class="form-control"
              type="text"
              placeholder="Your email"
              aria-label="default input example"
            />
          </div>
          <div class="col-md-2"></div>
        </div>
        <div class="row mt-3">
          <div class="col-md-2 "></div>
          <div class="col-md">
            <input
              class="form-control"
              type="text"
              placeholder="Your message"
              style={padm}
            />
          </div>
          <div class="col-sm-2"></div>
        </div>
        <div className="container text-center pt-3">
          <div class="row  ">
            <div class="col-md-9"></div>
            <div class="col-md d-flex justify-content-end">
              <button
                class="btn"
                type="submit"
                id="liveToastBtn"
                style={BgColor}
              >
                Submit
              </button>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
