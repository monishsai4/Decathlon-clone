import React from "react";

export default function Login() {
  return (
    <>
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
                      <h3>Login</h3>
                      <p>Go to your decathlon account here</p>
                      <div className="mb-3">
                        <div className="DisplayFlex">
                          <label
                            for="formGroupExampleInput"
                            className="form-label"
                          >
                            Enter your email address |
                          </label>
                          <label
                            for="formGroupExampleInput"
                            className="form-label"
                          >
                            | Enter your phone number
                          </label>
                        </div>

                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          placeholder="Email"
                        />
                      </div>
                      <div class="d-grid gap-2">
                        <button
                          class="btn"
                          type="button"
                          style={{
                            backgroundColor: "#3543BA",
                            color: "#fff",
                          }}
                        >
                          NEXT
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
                      <h6 className="mt-4">No account? Create one!</h6>
                      <p className="mt-4">
                        <u>Create your DECATHLON account</u>
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
    </>
  );
}
