import axios from "axios";
import { useState, useEffect } from "react";
import { OverlayTrigger, Table, Tooltip, Alert, Badge } from "react-bootstrap";
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [updateUi, setUpdateUi] = useState({});
  const [alert, setAlert] = useState(false);
  const [alertReject, setAlertReject] = useState(false);

  // Get All Users Ordered Item
  useEffect(() => {
    fetch("https://fantasy-kingdom-server.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => {
        setUpdateUi(data);
        setAllOrder(data);
      });
  }, [updateUi]);

  // Dynamic Change Order Status Approved
  const approvedOrder = (id) => {
    const status = {
      status: "Approved",
    };
    axios
      .put(
        `https://fantasy-kingdom-server.herokuapp.com/orderStatus/${id}`,
        status
      )
      .then((result) => {
        if (result.data.modifiedCount === 1) {
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
          }, 3000);
        } else {
          return;
        }
      });
  };

  // Dynamic Change Order Status Reject
  const rejectedOrder = (id) => {
    const reason = prompt("Why You Want To Reject This Order");
    if (reason === null) {
      return;
    } else {
      const status = {
        status: "Rejected",
        rejectReason: reason,
      };
      axios
        .put(
          `https://fantasy-kingdom-server.herokuapp.com/orderStatus/${id}`,
          status
        )
        .then((result) => {
          if (result.data.modifiedCount === 1) {
            setAlertReject(true);
            setTimeout(() => {
              setAlertReject(false);
            }, 3000);
          } else {
            return;
          }
        });
    }
  };

  return (
    <div className="container mt-4">
      {alert && (
        <div className="d-flex justify-content-center">
          <Alert variant="success w-50 py-5 fw-bold addAlert   animate__animated animate__fadeOut animate__delay-2s animate__animated animate__slow animate__fadeIn">
            Approved Successful!
          </Alert>
        </div>
      )}
      {alertReject && (
        <div className="d-flex justify-content-center">
          <Alert variant="danger w-50 py-5 fw-bold addAlert   animate__animated animate__fadeOut animate__delay-2s animate__animated animate__slow animate__fadeIn">
            Reject Successful!
          </Alert>
        </div>
      )}
      <div data-aos="zoom-in" data-aos-duration="3000">
        <h1 className="text-end" style={{ fontFamily: "'Teko', sans-serif" }}>
          <span style={{ color: "#FF6600" }}>ADMIN</span> PANEL
        </h1>
      </div>
      <div>
        <div className="manageOrderText mt-4 mb-5">
          <h1 data-aos="zoom-out-up" data-aos-duration="1000">
            Manage All Orders{" "}
          </h1>
        </div>
        <div className="container">
          {!allOrder.length ? (
            <h1 className="text-secondary fw-bold mt-5">No Order</h1>
          ) : (
            <div
              style={{ borderRadius: "15px" }}
              className="d-flex justify-content-center mt-5 shadow-lg py-5"
            >
              <Table
                data-aos="fade-up"
                data-aos-duration="2000"
                bordered
                hover
                responsive="md"
              >
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="px-5 py-3 border-0 fw-normal">
                      Orders{" "}
                      <Badge pill bg="danger" className="fw-bold">
                        {allOrder.length}
                      </Badge>
                    </th>
                    <th className="px-5 py-3 border-0 fw-normal">
                      Package Info
                    </th>
                    <th className="px-5 py-3 border-0 fw-normal">Buyer Info</th>
                    <th className="px-5 py-3 border-0 fw-normal">Order Date</th>
                    <th className="px-5 py-3 border-0 fw-normal">Status</th>
                    <th className="px-5 py-3 border-0 fw-normal">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {allOrder.map((orders) => (
                    <tr
                      data-aos="fade-up"
                      data-aos-duration="2500"
                      className="border-0"
                      key={orders?._id}
                    >
                      <td className="py-3 border-0 d-flex justify-content-center">
                        <div>
                          <img
                            width="60%"
                            src={orders?.orderInfo?.img}
                            alt="packageImage"
                          />
                        </div>
                      </td>
                      <td className="py-4 ps-5 border-0 pt-5">
                        <small className="fw-bold" style={{ fontSize: "10px" }}>
                          {orders?.orderInfo?._id}
                        </small>
                        <h6 style={{ fontSize: "13px" }} className="fw-bold">
                          {orders?.orderInfo?.rideName}
                        </h6>
                        <h6 style={{ fontSize: "13px" }} className="fw-bold">
                          {orders?.orderInfo?.price}
                        </h6>
                      </td>
                      <td className="py-4 ps-5 border-0 pt-5">
                        <h6 style={{ fontSize: "13px" }} className="fw-bold">
                          {orders?.name}
                        </h6>
                        <h6 style={{ fontSize: "13px" }} className="fw-bold ">
                          {orders?.email}
                        </h6>
                        <h6 className="fw-bold">{orders?.number}</h6>
                      </td>
                      <td className="py-4 ps-5 border-0  pt-5">
                        <h6 className="">
                          <small>
                            Placed On <br /> {orders?.date}
                          </small>
                        </h6>
                      </td>

                      <td className="py-4 ps-5 border-0  pt-5">
                        {orders?.status === "Rejected" ? (
                          <>
                            <span className="packageStatus2 fw-bold text-white p-3 rounded-pill py-2 bg-danger">
                              {orders?.status}
                            </span>
                          </>
                        ) : orders?.status === "Pending" ? (
                          <span className="status text-white p-3 rounded-pill py-2">
                            {orders?.status}
                          </span>
                        ) : (
                          <span className="packageStatus2 fw-bold text-white p-3 rounded-pill py-2 bg-success">
                            {orders?.status}
                          </span>
                        )}
                      </td>
                      <td className="py-4 ps-5 border-0  pt-5">
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-disabled">Approved</Tooltip>
                          }
                        >
                          <button
                            onClick={() => approvedOrder(orders._id)}
                            className="btn bg-success p-1 rounded me-3"
                          >
                            <i className="far fa-calendar-check fs-3 text-white"></i>
                          </button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-disabled">Rejected</Tooltip>
                          }
                        >
                          <button
                            onClick={() => rejectedOrder(orders._id)}
                            className="btn bg-danger p-1 rounded"
                          >
                            <i className="far fa-trash-alt fs-3 text-white"></i>
                          </button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
