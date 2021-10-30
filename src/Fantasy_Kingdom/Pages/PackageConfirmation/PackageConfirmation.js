import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./PackageConfirmation.css";
import { useForm } from "react-hook-form";
import { FormControl } from "react-bootstrap";

const PackageConfirmation = () => {
  const { packageId } = useParams();
  const history = useHistory();
  const [packageDetails, setPackageDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/rides/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPackageDetails(data));
  }, []);
  const packageDetail = packageDetails?.[0];
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container my-5">
      <div>
        <div>
          <h6 className="text-secondary">ID: {packageId}</h6>
        </div>
        <div className="row row-cols-2 mt-5">
          <div className="col col-12 col-md-6 col-lg-6">
            <div className="shadow-lg p-5 cardsContainer mt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                  type="name"
                  placeholder="Name"
                  className="w-100 my-3"
                  {...register("name")}
                  required
                />
                <FormControl
                  type="email"
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
                  value="Package Buy Confirm"
                />
              </form>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-6">
            <div className="shadow-lg p-5 cardsContainer">
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
