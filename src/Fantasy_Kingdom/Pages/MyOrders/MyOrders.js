import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const [orderPackage, setOrderPackage] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/matchPackage/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrderPackage(data));
  }, []);

  const cancelOrder = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/deleteOrder/${id}`);
  };

  return (
    <div className="container mt-5">
      <div>
        <div className="">
          <div className="orderText mt-4 mb-5">
            <h1>My Package Orders</h1>
          </div>
          <div className="row row-cols-2">
            {orderPackage.map((order) => (
              <div
                className="col col-12 col-md-12 col-lg-6 d-flex justify-content-center  mb-3"
                key={order?.orderInfo?._id}
              >
                <div className="card mb-3 ps-5 border-0">
                  <div className="row g-0 shadow-lg cardMain">
                    <div className="col-md-4 d-flex align-items-center">
                      <div className="ps-3">
                        <img
                          src={order?.orderInfo?.img}
                          className="img-fluid cardImage w-100"
                          alt="packageImage"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-start">
                        <h6>
                          <small>Order Id {order?._id}</small>
                        </h6>
                        <h6 className="text-secondary">
                          <small>Placed On {order?.date}</small>
                        </h6>
                        <h6 className="text-secondary mb-3">
                          {order?.status === "Rejected" && (
                            <>
                              <span>
                                <small className="text-danger fw-bold">
                                  {order?.rejectReason}
                                </small>
                              </span>
                            </>
                          )}
                        </h6>
                        <h4 className="card-title fw-bold">
                          {order?.orderInfo?.rideName}
                        </h4>
                        <h5 className="fw-bold">৳ {order?.orderInfo?.price}</h5>
                        <div className="d-flex justify-content-between me-5">
                          <button
                            onClick={() => cancelOrder(order?._id)}
                            className="btn btn-outline-danger fw-bold rounded-pill py-1 px-3"
                          >
                            Cancel
                          </button>
                          {order?.status === "Rejected" ? (
                            <>
                              <span className="packageStatus2 fw-bold text-white p-3 rounded-pill py-2 bg-danger">
                                {order?.status}
                              </span>
                            </>
                          ) : order?.status === "Pending" ? (
                            <span className="status text-white p-3 rounded-pill py-2">
                              {order?.status}
                            </span>
                          ) : (
                            <span className="packageStatus2 fw-bold text-white p-3 rounded-pill py-2 bg-success">
                              {order?.status}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
