import React from "react";
import { FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Contract = () => {
  const history = useHistory();
  return (
    <div className="container my-5">
      <div className="packageText mt-4 mb-5">
        <h1>Our All Package</h1>
      </div>
      <div className="">
        <div className="row row-cols-2 my-5">
          <div className="col col-12 col-md-6 col-lg-5">
            <div className="text-start">
              <h2 className="fw-bold">FANTASY KINGDOM</h2>
              <div className="text-secondary mt-5">
                <p>
                  <i className="fas fa-map-marked-alt me-3 fs-5"></i> Ashulia,
                  Savar, Jamgora 1349
                </p>
                <p>
                  <i className="far fa-envelope me-3 fs-5"></i>{" "}
                  info@fantasykingdom.net
                </p>
                <p>
                  <i className="fas fa-phone-alt me-3 fs-5"></i> 09612-002020{" "}
                </p>
                <p>
                  <i className="far fa-clock me-3 fs-5"></i> Saturday -Thursday:
                  11 AM – 07 PM
                </p>
                <p>
                  <i className="fas fa-clock me-3 fs-5"></i> Friday & Holiday:
                  10 AM – 08 PM
                </p>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-7">
            <img
              className="w-100 rounded"
              src="https://i.ibb.co/jg2HLkc/Screenshot-2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div>
        <div className="shadow-lg p-3 rounded-3">
          <h1 className="mb-4 mt-4">Planning a Meeting or Event?</h1>
          <p className="px-5">
            <small className="text-secondary">
              If you’re looking for a fun way to bring everyone on your team
              closer together, there is no better group activity than a day at
              Fantasy Kingdom. We offer a variety of turn-key programs that are
              easy to execute and can be customized to your group’s unique
              specifications. Please submit your details or you can call us at
              09612-012020
            </small>
          </p>
          <div className="text-start">
            <div className="d-flex">
              <FormControl
                className="me-3 w-75 py-2"
                placeholder="Name"
                type="text"
                name=""
                id=""
              />
              <FormControl
                className="me-3 w-50 py-2"
                placeholder="Email"
                type="email"
                name=""
                id=""
              />
              <FormControl
                className="me-3 w-50 py-2"
                placeholder="Subject"
                type="text"
                name=""
                id=""
              />
            </div>
            <FormControl
              as="textarea"
              className="mt-3 w-100"
              placeholder="Message"
              rows="2"
            />
          </div>
          <button
            onClick={() => history.push("/")}
            className="btn btn-secondary mt-4 px-4 container-fluid"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contract;
