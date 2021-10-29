import React from "react";
import "./ExplorePark.css";

const ExplorePark = () => {
  return (
    <div className="container MainContainer">
      <div className="exploreContainer shadow-lg">
        <div className="title py-5">
          <h1>EXPLORE OUR PARKS & RESORT</h1>
        </div>

        <div className="d-flex justify-content-center pb-5">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade w-75"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row row-cols-3 g-4">
                  <div>
                    <img
                      height="385px"
                      src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/p526x296/242868954_1825209491016555_3189044172367143046_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VbKOJIG-SVwAX_IB3VK&_nc_ht=scontent.fdac7-1.fna&oh=ad9d684bad1a496fff421deb6d61a5b0&oe=6180E691"
                      class="d-block w-100 carouselImage"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://fantasykingdom.net/wp-content/uploads/2021/08/FKC.jpg"
                      class="d-block w-100 carouselImage"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585740502.jpeg"
                      class="d-block w-100 carouselImage"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row row-cols-3">
                  <div>
                    <img
                      src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585740583.jpeg"
                      class="d-block w-100 carouselImage"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585741207.jpeg"
                      class="d-block w-100  carouselImage"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585740742.jpeg"
                      class="d-block w-100 carouselImage"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePark;
