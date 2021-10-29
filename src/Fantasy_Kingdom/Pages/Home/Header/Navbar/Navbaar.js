import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbaar.css";

const Navbaar = () => {
  const activeStyle = {
    color: "#000",
    borderBottom: "4px solid #000",
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className="">
          <Navbar.Brand href="/home">
            <img
              className="w-50"
              src="https://fantasykingdom.net/wp-content/uploads/2020/10/fantasy-logo-white.png"
              alt=""
            />
          </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink
                  activeStyle={activeStyle}
                  className="mx-4 text-decoration-none fw-bold navItem"
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink
                  activeStyle={activeStyle}
                  className="mx-4 text-decoration-none fw-bold navItem"
                  to="/blogs"
                >
                  Blogs
                </NavLink>
                <NavLink
                  activeStyle={activeStyle}
                  className="mx-4 text-decoration-none fw-bold navItem"
                  to="/contract"
                >
                  Contract
                </NavLink>
                <NavLink
                  activeStyle={activeStyle}
                  className="mx-4 text-decoration-none fw-bold navItem"
                  to="/myOrders"
                >
                  My Order
                </NavLink>
                <NavLink
                  activeStyle={activeStyle}
                  className="mx-4 text-decoration-none fw-bold navItem"
                  to="/manageAllOrders"
                >
                  Manage Order
                </NavLink>
                <NavLink
                  activeStyle={activeStyle}
                  className="mx-4 text-decoration-none fw-bold navItem"
                  to="/addRides"
                >
                  Manage Order
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbaar;
