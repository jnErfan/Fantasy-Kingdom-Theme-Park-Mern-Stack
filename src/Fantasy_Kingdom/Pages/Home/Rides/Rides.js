import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  OverlayTrigger,
  Row,
  Spinner,
  Tooltip,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Rides.css";

const Rides = () => {
  const [ridesPackage, setRidesPackage] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://fantasy-kingdom-server.herokuapp.com/ridesPackageHome")
      .then((res) => res.json())
      .then((data) => setRidesPackage(data));
  }, []);
  return (
    <div className="container">
      {!ridesPackage.length ? (
        <Spinner animation="border" variant="info loadingSpinner" />
      ) : (
        <div>
          <div
            data-aos-anchor-placement="center-bottom"
            className="packageText"
          >
            <h1 data-aos="fade-up" data-aos-duration="1000" className="mt-4">
              Our Rides Package
            </h1>
          </div>
          <Row xs={1} md={2} lg={3} className="g-4 mt-4">
            {ridesPackage.map((ridePackage) => (
              <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">Click</Tooltip>}
                key={ridePackage?._id}
              >
                <Col
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  onClick={() =>
                    history.push(`/packageConfirmation/${ridePackage?._id}`)
                  }
                  className=""
                >
                  <Card className="cardContainer">
                    <Card.Img
                      variant="top imageContainer"
                      src={ridePackage?.img}
                    />
                    <Card.Body className="cardBody">
                      <Card.Title className="fw-bold ellipsis">
                        {ridePackage?.rideName}
                      </Card.Title>
                      <Card.Text className="ellipsis">
                        {ridePackage?.description}
                      </Card.Text>
                      <h5 className="fw-bold">৳ {ridePackage?.price}</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </OverlayTrigger>
            ))}
          </Row>
          <button
            onClick={() => history.push("/ridesPackage")}
            className="btn fs-5 text-info mt-5 fw-bold"
          >
            See All <br /> <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Rides;
