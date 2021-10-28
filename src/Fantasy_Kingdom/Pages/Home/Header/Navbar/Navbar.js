import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
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
