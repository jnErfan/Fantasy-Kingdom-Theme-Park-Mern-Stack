import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./PackageConfirmation.css";
import { useForm } from "react-hook-form";
import { Alert, FormControl, Spinner } from "react-bootstrap";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const PackageConfirmation = () => {
  const { packageId } = useParams();
  const history = useHistory();
  const [packageDetails, setPackageDetails] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  // Dynamic Routing Single Data Fetch
  useEffect(() => {
    fetch(`https://fantasy-kingdom-server.herokuapp.com/rides/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPackageDetails(data));
  }, []);

  // Destructuring
  const packageDetail = packageDetails?.[0];

  // Get Customer Order Information With Hook Form And Send Data In Database With Axios
  const onSubmit = (data) => {
    // Send User Order  Info
    data.orderInfo = packageDetail;
    // Set Status Pending
    data.status = "Pending";
    reset();

    // Post User Info / Order Info And Status Status In Database
    axios
      .post("https://fantasy-kingdom-server.herokuapp.com/orderInfo", data)
      .then((result) => {
        if (result.data.insertedId) {
          setLoading(true);
          setTimeout(() => {
            setAlert(true);
            setTimeout(() => {
              setLoading(false);
              history.push("/myOrders");
            }, 3000);
          }, 2000);
        }
      });
  };

  return (
    <div className="container my-5">
      {loading && (
        <>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary spinner" />
          </div>
        </>
      )}
      {alert && (
        <>
          <div className="d-flex justify-content-center">
            <Alert variant="success w-50 py-5 fw-bold alertConfirm  animate__animated animate__slow animate__fadeOut animate__delay-2s">
              Order Placed Successful! <br /> Please Wait For Approved.
            </Alert>
          </div>
        </>
      )}
      <div>
        <div className="bookingText mt-4 mb-5">
          <h1 data-aos="zoom-out-down" data-aos-duration="1000">
            Package Booking Information{" "}
          </h1>
        </div>
        <div>
          <h6 className="text-secondary">ID: {packageId}</h6>
        </div>
        <div className="row row-cols-2 mt-5">
          <div className="col col-12 col-md-6 col-lg-6">
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-easing="linear"
              className="shadow-lg p-5 cardsContainer mt-5"
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                  type="name"
                  defaultValue={user?.displayName || ""}
                  placeholder="Name"
                  className="w-100 my-3"
                  {...register("name")}
                  required
                />
                <FormControl
                  type="email"
                  defaultValue={user?.email || ""}
                  placeholder="Email"
                  className="w-100 my-3"
                  {...register("email")}
                  required
                />
                <FormControl
                  type="date"
                  placeholder="Package Received Date"
                  className="w-100 my-3"
                  {...register("date")}
                  required
                />
                <FormControl
                  type="number"
                  placeholder="Contract Number"
                  className="w-100 my-3"
                  {...register("number")}
                  required
                />
                <input
                  className="btn orderButton w-100"
                  type="submit"
                  value="Package Booking Confirm"
                />
              </form>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-6">
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
              className="shadow-lg p-5 cardsContainer"
            >
              <div className="text-start">
                <img className="detailImg" src={packageDetail?.img} alt="" />
              </div>
              <div>
                <div className="text-start">
                  <h4 className="text-primary fw-bold">
                    {packageDetail?.rideName}
                  </h4>
                  <h5 className="fw-bold text-danger">
                    ৳ {packageDetail?.price}
                  </h5>
                  <p>
                    <small>{packageDetail?.description}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <button
          onClick={() => history.push("/ridesPackage")}
          className="btn btn-secondary px-5 py-2"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PackageConfirmation;
