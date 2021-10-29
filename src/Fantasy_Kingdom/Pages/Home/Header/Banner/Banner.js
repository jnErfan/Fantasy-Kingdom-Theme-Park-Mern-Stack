import React from "react";
import TypewriterComponent from "typewriter-effect";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner2">
      <div className="banner">
        <div className="container bannerContainer">
          <div className="text-start pt-5 ps-5">
            <h1 className="headerTitle text-info fw-bold">
              {" "}
              <span className="header-title1">Welcome To</span>
              <span className="text-light">
                <TypewriterComponent
                  options={{
                    strings: [
                      "Fantasy Kingdom",
                      "Water Kingdom",
                      "Resort Atlantis",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
          </div>
          <div className="d-flex justify-content-center">
            <div
              id="carouselExampleCaptions"
              className="carousel slide w-75 p-5 animate__animated animate__zoomIn carouselContainer"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://i.ibb.co/nwhj5z7/Fantasy-Kingdom2-1-1.png"
                    className="d-block w-100 slider-image"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="fw-bold carouselText">
                      <span className="fantasy">Fantasy Kingdom </span> <br />{" "}
                      Only Theme Park in Bangladesh
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://fantasykingdom.net/wp-content/uploads/2021/08/F_OOR5568-1.jpg"
                    className="d-block w-100 slider-image"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://fantasykingdom.net/wp-content/uploads/2021/08/F_OOR5695-1.jpg"
                    className="d-block w-100 slider-image"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://fantasykingdom.net/wp-content/uploads/2021/08/H10.jpg"
                    className="d-block w-100 slider-image"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://fantasykingdom.net/wp-content/uploads/2021/08/H09.png"
                    className="d-block  w-100 slider-image"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <i className="fas fa-chevron-circle-left sliderLeftButton fs-1"></i>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <i className="fas fa-chevron-circle-right sliderRightButton fs-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
