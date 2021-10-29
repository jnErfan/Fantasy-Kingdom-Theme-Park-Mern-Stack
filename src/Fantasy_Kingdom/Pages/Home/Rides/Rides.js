import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  OverlayTrigger,
  Row,
  Spinner,
  Tooltip,
} from "react-bootstrap";
import "./Rides.css";

const Rides = () => {
  const [ridesPackage, setRidesPackage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ridesPackageHome")
      .then((res) => res.json())
      .then((data) => setRidesPackage(data));
  }, []);
  return (
    <div className="container">
      {!ridesPackage.length ? (
        <Spinner animation="border" variant="info loadingSpinner" />
      ) : (
        <div>
          <div className="packageText">
            <h1 className="mt-4">Our Rides Package</h1>
          </div>
          <Row xs={1} md={2} lg={3} className="g-4 mt-4">
            {ridesPackage.map((ridePackage) => (
              <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">Click</Tooltip>}
                key={ridePackage?._id}
              >
                <Col className="">
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
        </div>
      )}
    </div>
  );
};

export default Rides;
