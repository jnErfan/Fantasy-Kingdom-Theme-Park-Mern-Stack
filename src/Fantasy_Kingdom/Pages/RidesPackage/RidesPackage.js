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
  const size = 6;
  useEffect(() => {
    fetch(`http://localhost:5000/pagination?page=${page}&&size=${size}`)
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
        <Spinner animation="border" variant="info spinner" />
      ) : (
        <>
          {" "}
          <div>
            <div className="packageText">
              <h1 className="mt-5">Our All Package</h1>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4 mt-4">
              {ridesPackage.map((ridePackage) => (
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Click</Tooltip>}
                  key={ridePackage?._id}
                >
                  <Col
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
