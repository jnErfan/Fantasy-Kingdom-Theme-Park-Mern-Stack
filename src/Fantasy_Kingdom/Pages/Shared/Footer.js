import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="container">
        <div>
          <div className="row row-cols-3 pt-5">
            <div className="col col-12 col-md-6 col-lg-4 text-start firstColum">
              <h2 className="fontTeko mb-4">CONTACT US </h2>
              <p>
                <small>
                  If you have any questions, please contact us at
                  info@fantasykingdom.net
                </small>
              </p>
              <h1 className="fontTeko mt-4">
                <i className="fas fa-phone-alt me-3"></i> 09612-002020
              </h1>
            </div>
            <div className="col col-12 col-md-6 col-lg-4">
              <div className="d-block">
                <Link className="text-light footer_nav d-block my-2" to="/">
                  About Us
                </Link>{" "}
                <Link
                  className="text-light footer_nav  d-block my-2"
                  to="/contract"
                >
                  Contract Us
                </Link>{" "}
                <Link className="text-light footer_nav d-block my-2" to="/">
                  Get Help
                </Link>{" "}
                <Link className="text-light footer_nav  d-block my-2" to="/">
                  Support
                </Link>{" "}
                <Link className="text-light footer_nav  d-block my-2" to="/">
                  Report A Bug
                </Link>{" "}
                <Link
                  className="text-light footer_nav  d-block my-2"
                  to="/contract"
                >
                  Terms Privacy
                </Link>
              </div>
            </div>
            <div className="col col-12 col-md-6 col-lg-4">
              <h1>PROUD MEMBER OF</h1>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div className="footar-icon text-center mt-3">
            <a href="https://www.facebook.com/jnerfan">
              {" "}
              <i className="fab fa-facebook fb pe-3"></i>{" "}
            </a>
            <a href="https://www.instagram.com/j.n.erfan/">
              <i className="fab fa-instagram ins pe-3"></i>
            </a>
            <a href="https://twitter.com/JNErfan">
              <i className="fab fa-twitter twt pe-3"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCRJ5d8nP2PBmv6rYdtNfFag">
              <i className="fab fa-youtube yt"></i>
            </a>
          </div>

          <div className="py-2">
            <small>
              <i class="far fa-copyright"></i> Design With Love By{" "}
              <span className="text-danger fw-bold"> J.N.Erfan</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
