import React from "react";
import "./MyOrders.css";

const MyOrders = () => {
  return (
    <div className="container mt-5">
      <div>
        <div className="">
          <div className="orderText mt-4 mb-5">
            <h1>My Package Orders</h1>
          </div>
          <div className="row row-cols-1">
            <div className="d-flex justify-content-center  mb-3">
              <div className="card mb-3 ps-5 border-0">
                <div className="row g-0 shadow-lg cardMain">
                  <div className="col-md-4 d-flex align-items-center">
                    <div>
                      <img
                        src="https://fantasykingdom.net/wp-content/uploads/2021/08/ticket-3-400x400.jpg"
                        className="img-fluid cardImage w-75"
                        alt="packageImage"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <h6>Order Id</h6>
                      <h6 className="text-secondary">
                        <small>Placed On 22-10-2021</small>
                      </h6>
                      <h6 className="text-secondary mb-3">
                        <small>Estimated Time ...</small>
                      </h6>
                      <h4 className="card-title fw-bold">
                        PARK ENTRY +10 Rides
                      </h4>
                      <h5 className="fw-bold">৳ 900.00</h5>
                      <div className="text-end me-5">
                        <p>
                          <span className="status fw-bold text-white p-3 rounded-pill py-2">
                            Pending
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="card mb-3 ps-5 border-0">
                <div className="row g-0 shadow-lg cardMain">
                  <div className="col-md-4 d-flex align-items-center">
                    <div>
                      <img
                        src="https://fantasykingdom.net/wp-content/uploads/2021/08/ticket-3-400x400.jpg"
                        className="img-fluid cardImage w-75"
                        alt="packageImage"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <h6>Order Id</h6>
                      <h6 className="text-secondary">
                        <small>Placed On 22-10-2021</small>
                      </h6>
                      <h6 className="text-secondary mb-3">
                        <small>Estimated Time ...</small>
                      </h6>
                      <h4 className="card-title fw-bold">
                        PARK ENTRY +10 Rides
                      </h4>
                      <h5 className="fw-bold">৳ 900.00</h5>
                      <div className="text-end me-5">
                        <p>
                          <span className="status fw-bold text-white p-3 rounded-pill py-2">
                            Pending
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
