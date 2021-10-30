import React from "react";
import "./ExplorePark.css";

const ExplorePark = () => {
  return (
    <div className="container MainContainer" id="ExplorePark">
      <div className="exploreContainer shadow-lg">
        <div className="title py-5">
          <h1>EXPLORE OUR PARKS & RESORT</h1>
        </div>

        <div className="d-flex justify-content-center pb-5">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade w-75"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row row-cols-3 g-4">
                  <div className="col col-12 col-md-4 col-lg-4">
                    <img
                      src="https://fantasykingdom.net/wp-content/uploads/2021/08/FKC.jpg"
                      className="d-block w-100 carouselImage"
                      alt="..."
                    />
                  </div>
                  <div className="col col-12 col-md-4 col-lg-4">
                    <img
                      src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585740502.jpeg"
                      className="d-block w-100 carouselImage"
                      alt=""
                    />
                  </div>

                  <div className="col col-12 col-md-4 col-lg-4">
                    <img
                      src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585740742.jpeg"
                      className="d-block w-100 carouselImage"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row row-cols-3 g-4">
                  <div className="col col-12 col-md-4 col-lg-4">
                    <img
                      src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585740583.jpeg"
                      className="d-block w-100 carouselImage"
                      alt="..."
                    />
                  </div>
                  <div className="col col-12 col-md-4 col-lg-4">
                    <img
                      src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585741207.jpeg"
                      className="d-block w-100  carouselImage"
                      alt=""
                    />
                  </div>
                  <div className="col col-12 col-md-4 col-lg-4">
                    <img
                      src="https://fantasykingdom.net/wp-content/uploads/2021/08/5.jpg"
                      className="d-block w-100 carouselImage"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePark;
