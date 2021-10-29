import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="shadow-lg d-inline-block p-5 loginContainer">
        <div className="loginText mt-4 mb-5">
          <h1 className="">
            <span style={{ color: "#FF6600" }}>LOGIN</span> WITH
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="shadow-lg buttonContainer p-4">
            <button className="btn btn-outline-secondary rounded-pill border border-3 text-start d-block my-3">
              <span>
                <img
                  className="mx-3"
                  src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                  alt=""
                />
              </span>
              <span className="fw-bold me-4">Continue With Google</span>
            </button>
            <button className="btn btn-outline-secondary rounded-pill border border-3 text-start d-block my-3">
              <span>
                <img
                  className="mx-3"
                  src="https://img.icons8.com/color/48/000000/github.png"
                  alt=""
                />
              </span>
              <span className="fw-bold me-4">Continue With GitHub</span>
            </button>
            <button className="btn btn-outline-secondary rounded-pill border border-3 text-start d-block my-3">
              <span>
                <img
                  className="mx-3"
                  src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                  alt=""
                />
              </span>
              <span className="fw-bold me-1">Continue With Facebook</span>
            </button>
          </div>

          <div className="text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
