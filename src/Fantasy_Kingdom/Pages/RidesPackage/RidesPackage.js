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
import "./RidesPackage.css";

const RidesPackage = () => {
  const [ridesPackage, setPackage] = useState([]);
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [pageCounts, setPageCount] = useState(0);

  // Set Par Page Showing Rides
  const size = 6;

  // Fetch Limit Only Home Page Need 8 Data
  useEffect(() => {
    fetch(
      `https://fantasy-kingdom-server.herokuapp.com/pagination?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPackage(data?.ridesPackage);
        const count = data?.count;
        setPageCount(Math.ceil(count / size));
      });
  }, [page]);
  return (
    <div className="container my-5">
      {!ridesPackage.length ? (
        <Spinner animation="border" variant="info ridesSpinner" />
      ) : (
        <>
          {" "}
          <div>
            <div className="packageText">
              <h1
                data-aos="zoom-out-up"
                data-aos-duration="1000"
                className="mt-5"
              >
                Our All Package
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
                    data-aos-anchor-placement="top-bottom"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1500"
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
          </div>
        </>
      )}
      <div className="mt-5">
        {[...Array(pageCounts).keys()].map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum)}
            className={
              pageNum === page
                ? "btn btn-info mx-2 fw-bold"
                : "btn btn-outline-info fw-bold mx-2"
            }
          >
            {pageNum + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RidesPackage;
