import React from "react";
import { OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
  return (
    <div className="container mt-4">
      <div>
        <h1 className="text-end" style={{ fontFamily: "'Teko', sans-serif" }}>
          <span style={{ color: "#FF6600" }}>ADMIN</span> PANEL
        </h1>
      </div>
      <div>
        <div className="manageOrderText mt-4 mb-5">
          <h1>Manage All Orders</h1>
        </div>
        <div className="container">
          <div
            style={{ borderRadius: "15px" }}
            className="d-flex justify-content-center mt-5 shadow-lg py-5"
          >
            <Table bordered hover responsive="md">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-5 py-3 border-0 fw-normal">Package</th>
                  <th className="px-5 py-3 border-0 fw-normal">Package Info</th>
                  <th className="px-5 py-3 border-0 fw-normal">Buyer Info</th>
                  <th className="px-5 py-3 border-0 fw-normal">Order Date</th>
                  <th className="px-5 py-3 border-0 fw-normal">Status</th>
                  <th className="px-5 py-3 border-0 fw-normal">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-0">
                  <td className="py-3 border-0 d-flex justify-content-center">
                    <div>
                      <img
                        width="60%"
                        src="https://fantasykingdom.net/wp-content/uploads/2021/08/ticket-3-400x400.jpg"
                        className="img-fluid cardImage"
                        alt="packageImage"
                      />
                    </div>
                  </td>
                  <td className="py-4 ps-5 border-0 pt-5">
                    <small className="fw-bold" style={{ fontSize: "10px" }}>
                      617bcdbf2091f7b8f035e11a
                    </small>
                    <h6 style={{ fontSize: "13px" }} className="fw-bold">
                      PARK ENTRY +10 Rides
                    </h6>
                    <h6 style={{ fontSize: "13px" }} className="fw-bold">
                      ৳ 900.00
                    </h6>
                  </td>
                  <td className="py-4 ps-5 border-0 pt-5">
                    <h6 style={{ fontSize: "13px" }} className="fw-bold">
                      J.N. Erfan
                    </h6>
                    <h6 style={{ fontSize: "13px" }} className="fw-bold ">
                      j.n.erfan420@gmail.com
                    </h6>
                    <h6 className="fw-bold">01978352135</h6>
                  </td>
                  <td className="py-4 ps-5 border-0  pt-5">
                    <h6 className="">
                      <small>
                        Placed On <br /> 22-10-2021
                      </small>
                    </h6>
                  </td>

                  <td className="py-4 ps-5 border-0  pt-5">
                    <span className="packageStatus fw-bold text-white p-3 rounded-pill py-2">
                      Pending
                    </span>
                  </td>
                  <td className="py-4 ps-5 border-0  pt-5">
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">Approved</Tooltip>
                      }
                    >
                      <button className="btn bg-success p-1 rounded me-3">
                        <i className="far fa-calendar-check fs-3 text-white"></i>
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">Rejected</Tooltip>
                      }
                    >
                      <button className="btn bg-danger p-1 rounded">
                        <i className="far fa-trash-alt fs-3 text-white"></i>
                      </button>
                    </OverlayTrigger>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
