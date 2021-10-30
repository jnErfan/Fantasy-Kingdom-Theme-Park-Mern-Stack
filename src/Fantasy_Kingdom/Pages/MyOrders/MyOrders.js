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
                key={order.orderInfo._id}
              >
                <div className="card mb-3 ps-5 border-0">
                  <div className="row g-0 shadow-lg cardMain">
                    <div className="col-md-4 d-flex align-items-center">
                      <div className="ps-3">
                        <img
                          src={order.orderInfo.img}
                          className="img-fluid cardImage w-100"
                          alt="packageImage"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-start">
                        <h6>Order Id {order.orderInfo._id}</h6>
                        <h6 className="text-secondary">
                          <small>Placed On {order.date}</small>
                        </h6>
                        <h6 className="text-secondary mb-3">
                          <small>Estimated Time ...</small>
                        </h6>
                        <h4 className="card-title fw-bold">
                          {order.orderInfo.rideName}
                        </h4>
                        <h5 className="fw-bold">৳ {order.orderInfo.price}</h5>
                        <div className="d-flex justify-content-between me-5">
                          <button className="btn btn-outline-danger fw-bold rounded-pill py-0 px-3">
                            Cancel
                          </button>

                          <span className="status text-white p-3 rounded-pill py-2">
                            {order.status}
                          </span>
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
