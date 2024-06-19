import React, { useState } from "react";
import Footer from "../../Components/Footer";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ------------------------------------------------------------------------

// ------------------------------------------------------------------------

export default function Contact() {
  // Using samefile styles

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
  // ------------------------------------------------------------

  // ------------------------------------------------------------

  //  Using emailjs for email submittion initialising the function
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_lcvl9kt";
    const publicId = "template_arxqe6n";
    const publicKey = "a8ENFXD7P58DsU2yn";
    const templateParams = {
      from_name: name,
      from_phone: number,
      from_email: email,
      message: message,
      to_name: "Decathlon",
    };
    if (name === "" || email === "" || number === "" || message === "") {
      toast.warn("Enter all fields!");
    } else {
      emailjs
        .send(serviceId, publicId, templateParams, publicKey)
        .then((response) => {
          console.log("email sent successfully", response);
          toast.success("Message submitted!");
          setEmail("");
          setMessage("");
          setName("");
          setNumber("");
        })
        .catch((error) => {
          console.error("Error sending email", error);
        });
    }
  };
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={Carousme}
      >
        <div className="text-center">
          <h3>If you faced any problems in shopping.</h3>
          <p>Drop in us a message</p>
        </div>
      </div>
      <div className="container-fluid text-center" style={MainDiv}>
        <div className="text-center mt-5">
          <h2>Get in Touch</h2>
        </div>
        <div className="text-center mt-3">
          <p>Let's talk about your thoughts </p>
        </div>
        <div className="row mt-4">
          <div className="col-2"></div>
          <div className="col-md">
            <input
              className="form-control"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="default input example"
            />
          </div>{" "}
          <br />
          <div className="col-md">
            <input
              className="form-control"
              type="number"
              id="number1"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Your phone number"
              aria-label="default input example"
            />
          </div>
          <br />
          <div className="col-md">
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              aria-label="default input example"
            />
          </div>
          <br />
          <div className="col-md-2"></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-2 "></div>
          <div className="col-md">
            <input
              className="form-control"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              style={padm}
            />
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div className="container text-center pt-3">
          <div className="row  ">
            <div className="col-md-9"></div>
            <div className="col-md d-flex justify-content-end">
              <button
                className="btn"
                type="submit"
                id="toastbtn"
                style={BgColor}
                onClick={handleSubmit}
              >
                Submit
              </button>
              <ToastContainer />
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
