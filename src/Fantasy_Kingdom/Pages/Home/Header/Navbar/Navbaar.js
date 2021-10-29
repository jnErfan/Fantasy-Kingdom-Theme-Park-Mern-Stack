import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import "./Navbaar.css";

const Navbaar = () => {
  const history = useHistory();
  const { logOut, user } = useAuth();
  console.log(user);
  const activeStyle = {
    color: "#000",
    borderBottom: "4px solid #000",
  };
  const defaultUserImage = "https://i.ibb.co/hM9DLXG/avt2.png";
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className="px-4">
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
                  className="mx-2 text-decoration-none fw-bold navItem"
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink
                  activeStyle={activeStyle}
                  className="mx-2 text-decoration-none fw-bold navItem"
                  to="/ridesPackage"
                >
                  Packages
                </NavLink>
                <NavLink
                  activeStyle={activeStyle}
                  className="mx-2 text-decoration-none fw-bold navItem"
                  to="/"
                >
                  Parks
                </NavLink>

                <NavLink
                  activeStyle={activeStyle}
                  className="mx-2 text-decoration-none fw-bold navItem"
                  to="/contract"
                >
                  Contract
                </NavLink>
                {user && (
                  <>
                    {" "}
                    <NavLink
                      activeStyle={activeStyle}
                      className="mx-2 text-decoration-none fw-bold navItem"
                      to="/myOrders"
                    >
                      My Order
                    </NavLink>
                    <NavLink
                      activeStyle={activeStyle}
                      className="mx-2 text-decoration-none fw-bold navItem"
                      to="/manageAllOrders"
                    >
                      Manage Order
                    </NavLink>
                    <NavLink
                      activeStyle={activeStyle}
                      className="mx-2 text-decoration-none fw-bold navItem"
                      to="/addRides"
                    >
                      Add Packages
                    </NavLink>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
          <div>
            {!user ? (
              <>
                <button
                  onClick={() => history.push("/login")}
                  className="btn btn-outline-secondary fw-bold rounded-pill py-1 px-4 mb-2"
                >
                  Login{" "}
                  <img
                    src="https://img.icons8.com/ios-glyphs/25/000000/login-rounded-right--v1.png"
                    alt=""
                  />
                </button>
              </>
            ) : (
              <>
                <span>
                  <img
                    width="45px"
                    className="border rounded-circle"
                    src={user?.photoURL || defaultUserImage}
                    alt=""
                  />
                </span>

                <span className="ms-3">{user.displayName}</span>
                <button
                  onClick={logOut}
                  className="btn btn-outline-danger fw-bold rounded-pill py-1 px-3 mb-2 ms-3"
                >
                  Log Out <i className="fas fa-sign-out-alt"></i>
                </button>
              </>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbaar;
