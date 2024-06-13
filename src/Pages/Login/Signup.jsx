import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Login from "./Login";

export default function Signup() {
  return (
    <>
      <h1>Hello</h1>
      <div>
        <div className="container-flex">
          <div className="row">
            <div className="col-md">
              <img
                src="Img/Loginf1.avif"
                height="120%"
                width="102%"
                alt="DecathlonLogo"
                className="d-inline-block align-text-top"
              />
            </div>
            <div className="col-md">
              <div className="container">
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                      <h3>SignUp</h3>
                      <p>Create your decathlon account here</p>
                      <div class="container-flex">
                        <div class="row">
                          <div class="col">
                            <label
                              for="formGroupExampleInput"
                              className="form-label"
                            >
                              Enter your Phone Number
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="formGroupExampleInput"
                              placeholder="Number"
                            />
                          </div>
                          <div class="col">
                            <label
                              for="formGroupExampleInput"
                              className="form-label"
                            >
                              Enter your new Password
                            </label>
                            <input
                              type="Password"
                              className="form-control"
                              id="formGroupExampleInput"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                      </div>
                      <br />

                      <div class="d-grid gap-2">
                        <button
                          class="btn"
                          type="button"
                          style={{
                            backgroundColor: "#3543BA",
                            color: "#fff",
                          }}
                        >
                          Login
                        </button>
                      </div>
                      <p className="mt-4">Social login</p>
                      <button
                        type="button"
                        class="btn btn-outline-dark me-2"
                        style={{ width: "45px", height: "45px" }}
                      >
                        {" "}
                        <img
                          src="Img/Google.png"
                          height="16px"
                          width="16px"
                          alt="Google"
                        />
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-dark me-2"
                        style={{ width: "45px", height: "45px" }}
                      >
                        {" "}
                        <img
                          src="Img/Facebook.png"
                          height="16px"
                          width="16px"
                          alt="Google"
                        />
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-dark me-2"
                        style={{ width: "45px", height: "45px" }}
                      >
                        {" "}
                        <img
                          src="Img/Apple.png"
                          height="16px"
                          width="16px"
                          alt="Google"
                        />
                      </button>
                      <h6 className="mt-4">Existing account? Login!</h6>
                      <p className="mt-4">
                        <u>
                          {" "}
                          <Link to="/Login">Login your DECATHLON account</Link>
                        </u>
                      </p>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}
