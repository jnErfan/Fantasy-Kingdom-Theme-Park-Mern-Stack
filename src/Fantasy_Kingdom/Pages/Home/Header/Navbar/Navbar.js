import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="bg-dark py-3">
        <Link
          className="mx-4 text-decoration-none text-white fw-bold"
          to="/home"
        >
          Home
        </Link>
        <Link
          className="mx-4 text-decoration-none text-white fw-bold"
          to="/blogs"
        >
          Blogs
        </Link>
        <Link
          className="mx-4 text-decoration-none text-white fw-bold"
          to="/contract"
        >
          Contract
        </Link>
        <Link
          className="mx-4 text-decoration-none text-white fw-bold"
          to="/myOrders"
        >
          My Order
        </Link>
        <Link
          className="mx-4 text-decoration-none text-white fw-bold"
          to="/manageAllOrders"
        >
          Manage Order
        </Link>
        <Link
          className="mx-4 text-decoration-none text-white fw-bold"
          to="/addRides"
        >
          Manage Order
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
