import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Overlay,
  Popover,
  Modal,
  SplitButton,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../../Hooks/useAuth";
import "./Navbaar.css";

const Navbaar = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const [smShow, setSmShow] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState([]);
  const [dataChainge, setDataChainge] = useState("");
  const history = useHistory();
  const { logOut, user } = useAuth();
  const activeStyle = {
    color: "#000",
    borderBottom: "4px solid #000",
  };
  const defaultUserImage = "https://i.ibb.co/hM9DLXG/avt2.png";

  // On Click Profile Popover
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  useEffect(() => {
    fetch(
      `https://fantasy-kingdom-server.herokuapp.com/matchPackage/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrderQuantity(data);
        setDataChainge(data);
      });
  }, [dataChainge]);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container className="">
          <Navbar.Brand href="/home">
            <img
              className="w-50"
              src="https://fantasykingdom.net/wp-content/uploads/2020/10/fantasy-logo-white.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <NavLink
                activeStyle={activeStyle}
                className="mx-2 text-decoration-none fw-bold navItem"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                activeStyle={activeStyle}
                className="me-1 text-decoration-none fw-bold navItem"
                to="/ridesPackage"
              >
                Packages
              </NavLink>
              <SplitButton
                href="#ExplorePark"
                variant="fight fw-bold parks"
                title="Parks"
              >
                <Dropdown.Item className="navItem2">
                  <HashLink
                    className="mx-2 text-decoration-none fw-bold text-dark"
                    to="/home#FantasyGallery"
                  >
                    Fantasy Kingdom
                  </HashLink>
                </Dropdown.Item>
                <Dropdown.Item className="navItem2">
                  <HashLink
                    className="mx-2 text-decoration-none fw-bold text-dark"
                    to="/home#WaterKingdom"
                  >
                    Water Kingdom
                  </HashLink>
                </Dropdown.Item>
                <Dropdown.Item className="navItem2">
                  {" "}
                  <HashLink
                    className="mx-2 text-decoration-none fw-bold text-dark"
                    to="/home#AtlantisResort"
                  >
                    Atlantis Resort
                  </HashLink>
                </Dropdown.Item>
              </SplitButton>
              <NavLink
                activeStyle={activeStyle}
                className="me-1 text-decoration-none fw-bold navItem"
                to="/contract"
              >
                Contract
              </NavLink>
              {user && (
                <>
                  {" "}
                  <NavLink
                    activeStyle={activeStyle}
                    className="me-1 text-decoration-none fw-bold navItem orderMargin"
                    to="/myOrders"
                  >
                    My Order
                    <Badge bg="danger" className="ms-2 p-1 rounded-circle">
                      {orderQuantity.length}
                    </Badge>
                  </NavLink>
                  <>
                    <span
                      onClick={() => setSmShow(true)}
                      className="ms-5 adminLogo"
                    >
                      <span className="fw-bold ">ADMIN</span>
                      <img
                        src="https://img.icons8.com/fluency/48/000000/admin-settings-male.png"
                        alt=""
                      />
                    </span>
                    <Modal
                      size="sm"
                      show={smShow}
                      onHide={() => setSmShow(false)}
                      aria-labelledby="example-modal-sizes-title-sm"
                    >
                      <Modal.Header data-aos="flip-left" closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm ">
                          <span className="fw-bold">
                            <span style={{ color: "#FF6600" }}>ADMIN</span>{" "}
                            PANEL
                          </span>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body
                        data-aos="zoom-out-left"
                        data-aos-duration="1000"
                      >
                        <NavLink
                          className="me-1 text-decoration-none fw-bold text-dark d-block mt-3 adminItem"
                          to="/manageAllOrders"
                        >
                          <i className="fas fa-tasks me-3 fs-4"></i> Manage
                          Order
                        </NavLink>
                        <NavLink
                          className="me-1 text-decoration-none fw-bold text-dark d-block mt-3 pb-4 adminItem"
                          to="/addRides"
                        >
                          <i className="fas fa-folder-plus fs-4 me-3"></i> Add
                          Packages
                        </NavLink>
                      </Modal.Body>
                    </Modal>
                  </>
                </>
              )}
            </Nav>
            <Nav>
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
                    <span ref={ref}>
                      <img
                        onClick={handleClick}
                        width="45px"
                        className="border rounded-circle ms-3 profileImage"
                        src={user?.photoURL || defaultUserImage}
                        alt=""
                      />
                      <Overlay
                        show={show}
                        target={target}
                        placement="bottom"
                        container={ref}
                        containerPadding={20}
                      >
                        <Popover id="popover-contained">
                          <Popover.Header
                            data-aos="zoom-out-down"
                            className="px-5 border-0 bg-secondary text-center"
                          >
                            <span className="ms-2 fs-5 fw-bold text-info">
                              {user.displayName}
                            </span>
                          </Popover.Header>
                          <Popover.Body>
                            <div
                              data-aos="zoom-out-down"
                              className="text-center"
                            >
                              <img
                                width="100px"
                                className="border rounded-circle ms-3"
                                src={user?.photoURL || defaultUserImage}
                                alt=""
                              />
                            </div>
                          </Popover.Body>
                        </Popover>
                      </Overlay>
                    </span>

                    <button
                      onClick={logOut}
                      className="btn btn-outline-danger fw-bold rounded-pill  px-3 py-2 ms-3"
                    >
                      Log Out <i className="fas fa-sign-out-alt"></i>
                    </button>
                  </>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbaar;
