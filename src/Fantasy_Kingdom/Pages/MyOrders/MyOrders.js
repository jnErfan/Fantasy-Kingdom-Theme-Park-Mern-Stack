import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const [orderPackage, setOrderPackage] = useState([]);
  const [orderCancel, setOrderCancel] = useState("");
  const [alertConfirmation, setAlertConfirmation] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://fantasy-kingdom-server.herokuapp.com/matchPackage/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrderCancel(data);
        setOrderPackage(data);
      });
  }, [orderCancel]);

  const cancelOrder = (id) => {
    const confirmation = prompt("Drop (CANCEL) This To Cancel Confirm.");
    if (confirmation === "CANCEL") {
      setAlertConfirmation(true);
      axios
        .delete(
          `https://fantasy-kingdom-server.herokuapp.com/deleteOrder/${id}`
        )
        .then((result) => {
          if (result.data.deletedCount === 1) {
            setTimeout(() => {
              setAlertConfirmation(false);
            }, 2000);
          }
        });
    } else if (confirmation === null) {
      return;
    } else {
      alert("Wrong Word Type");
    }
  };
  return (
    <div className="container mt-5">
      <div>
        {alertConfirmation && (
          <>
            <div className="d-flex justify-content-center">
              <Alert variant="danger w-50 py-5 fw-bold alertCon   animate__animated animate__fadeOut animate__delay-1s">
                Cancel Successful!
              </Alert>
            </div>
          </>
        )}
        <div className="">
          <div className="orderText mt-4 mb-5">
            <h1 data-aos="zoom-out-up" data-aos-duration="1000">
              My Package Orders
            </h1>
          </div>
          <>
            {!orderPackage.length && (
              <h1 className="text-secondary fw-bold mt-5">No Order</h1>
            )}
            <div className="row row-cols-2">
              {orderPackage.map((order) => (
                <div
                  data-aos="flip-left"
                  data-aos-duration="1500"
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
                          <h5 className="fw-bold">
                            ৳ {order?.orderInfo?.price}
                          </h5>
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
          </>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
