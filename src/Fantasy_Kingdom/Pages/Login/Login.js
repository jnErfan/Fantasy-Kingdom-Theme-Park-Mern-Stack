import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleLogin, githubSignIn, facebookSignIn, setUser, error } =
    useAuth();
  const history = useHistory();
  const location = useLocation();

  // Redirect Page Location
  const redirect = location.state?.from || "/home";

  // Sending to where you were before Google Login
  const loginGoogle = () => {
    googleLogin().then((result) => {
      setUser(result?.user);
      history.push(redirect);
    });
  };

  // Sending to where you were before Github Login
  const loginWithGithub = () => {
    githubSignIn().then((result) => {
      history.push(redirect);
      setUser(result?.user);
    });
  };

  // Sending to where you were before facebook Login
  const loginWithFacebook = () => {
    facebookSignIn().then((result) => {
      history.push(redirect);
      setUser(result?.user);
    });
  };

  return (
    <div className="container mt-5">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="shadow-lg d-inline-block p-5 loginContainer"
      >
        <div className="loginText mt-4 mb-5">
          <h1 data-aos="fade-up" data-aos-duration="2000" className="">
            <span style={{ color: "#FF6600" }}>LOGIN</span> WITH
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="shadow-lg buttonContainer p-4">
            <button
              onClick={loginGoogle}
              className="btn btn-outline-secondary rounded-pill border border-3 text-start d-block my-3"
            >
              <span>
                <img
                  className="mx-3"
                  src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                  alt=""
                />
              </span>
              <span className="fw-bold me-4">Continue With Google</span>
            </button>
            <button
              onClick={loginWithGithub}
              className="btn btn-outline-secondary rounded-pill border border-3 text-start d-block my-3"
            >
              <span>
                <img
                  className="mx-3"
                  src="https://img.icons8.com/color/48/000000/github.png"
                  alt=""
                />
              </span>
              <span className="fw-bold me-4">Continue With GitHub</span>
            </button>
            <button
              onClick={loginWithFacebook}
              className="btn btn-outline-secondary rounded-pill border border-3 text-start d-block my-3"
            >
              <span>
                <img
                  className="mx-3"
                  src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                  alt=""
                />
              </span>
              <span className="fw-bold me-1">Continue With Facebook</span>
            </button>
            <p>
              <small className="text-danger fw-bold">{error}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
