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
        <div className="container" style={{ marginTop: "120px" }}>
          <div
            style={{ borderRadius: "15px" }}
            className="d-flex justify-content-center mt-5 shadow-lg py-5"
          >
            <Table bordered hover responsive="md">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-5 py-3 border-0 fw-normal">Package</th>
                  <th className="px-5 py-3 border-0 fw-normal">Package Name</th>
                  <th className="px-5 py-3 border-0 fw-normal">Order Date</th>
                  <th className="px-5 py-3 border-0 fw-normal">Price</th>
                  <th className="px-5 py-3 border-0 fw-normal">Status</th>
                  <th className="px-5 py-3 border-0 fw-normal">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-0">
                  <td className="py-3 border-0 d-flex justify-content-center">
                    <div>
                      <img
                        src="https://fantasykingdom.net/wp-content/uploads/2021/08/ticket-3-400x400.jpg"
                        className="img-fluid cardImage w-50"
                        alt="packageImage"
                      />
                    </div>
                  </td>
                  <td className="py-4 ps-5 border-0 pt-5">
                    <h4 className="fw-bold">PARK ENTRY +10 Rides</h4>
                  </td>
                  <td className="py-4 ps-5 border-0  pt-5">
                    <h6 className="text-secondary">
                      <small>Placed On 22-10-2021</small>
                    </h6>
                  </td>
                  <td className="py-4 ps-5 border-0  pt-5">
                    <h5 className="fw-bold">৳900.00</h5>
                  </td>
                  <td className="py-4 ps-5 border-0  pt-5">
                    <span className="packageStatus fw-bold text-white p-3 rounded-pill py-2">
                      Pending
                    </span>
                  </td>
                  <td className="py-4 ps-5 border-0  pt-4">
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
                <tr className="border-0">
                  <td className="py-3 border-0 d-flex justify-content-center">
                    <div>
                      <img
                        src="https://fantasykingdom.net/wp-content/uploads/2021/08/ticket-3-400x400.jpg"
                        className="img-fluid cardImage w-50"
                        alt="packageImage"
                      />
                    </div>
                  </td>
                  <td className="py-4 ps-5 border-0 pt-5">
                    <h4 className="fw-bold">PARK ENTRY +10 Rides</h4>
                  </td>
                  <td className="py-4 ps-5 border-0  pt-5">
                    <h6 className="text-secondary">
                      <small>Placed On 22-10-2021</small>
                    </h6>
                  </td>
                  <td className="py-4 ps-5 border-0  pt-5">
                    <h5 className="fw-bold">৳900.00</h5>
                  </td>
                  <td className="py-4 ps-5 border-0  pt-5">
                    <span className="packageStatus fw-bold text-white p-3 rounded-pill py-2">
                      Pending
                    </span>
                  </td>
                  <td className="py-4 ps-5 border-0  pt-4">
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
