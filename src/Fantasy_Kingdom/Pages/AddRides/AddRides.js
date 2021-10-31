import axios from "axios";
import React, { useState } from "react";
import { Alert, Form, FormControl, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddRides.css";

const AddRides = () => {
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://fantasy-kingdom-server.herokuapp.com/rides", data)
      .then((result) => {
        if (result.data.insertedId) {
          setLoading(true);
          setTimeout(() => {
            setAlert(true);
            setTimeout(() => {
              setLoading(false);
              reset();
            }, 4000);
          }, 1000);
        }
      });
  };
  return (
    <div className="container my-4">
      {loading && (
        <>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="info addSpinner" />
          </div>
        </>
      )}
      {alert && (
        <>
          <div className="d-flex justify-content-center">
            <Alert variant="success w-50 py-5 fw-bold addAlert   animate__animated animate__fadeOut animate__delay-3s animate__animated animate__slow animate__fadeIn">
              Package Add Successful!
            </Alert>
          </div>
        </>
      )}
      <div>
        <div data-aos="zoom-in" data-aos-duration="3000">
          <h1 className="text-end" style={{ fontFamily: "'Teko', sans-serif" }}>
            <span style={{ color: "#FF6600" }}>ADMIN</span> PANEL
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="shadow-lg p-5 mt-4 fromContainer w-75"
          >
            <div className="addPackageText mt-4 mb-5">
              <h1 data-aos="zoom-out-up" data-aos-duration="1000">
                Add Rides Package
              </h1>
            </div>
            <div className="text-start">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Label>Rides Package Name</Form.Label>
                <FormControl
                  className="w-100 mb-4"
                  type="text"
                  placeholder="Rides Package Name"
                  required
                  {...register("rideName")}
                />
                <Form.Label>Description</Form.Label>
                <FormControl
                  as="textarea"
                  className="w-100 mb-4"
                  placeholder="Description"
                  required
                  {...register("description")}
                />
                <Form.Label>Price</Form.Label>
                <FormControl
                  className="w-100 mb-4"
                  type="number"
                  placeholder="Package Price"
                  required
                  {...register("price")}
                />

                <Form.Label>Package Image Url</Form.Label>
                <FormControl
                  className="w-100 mb-4"
                  type="url"
                  placeholder="Rides Package Image Url"
                  {...register("img")}
                  required
                />

                <FormControl
                  className="w-100 mb-4"
                  type="file"
                  required
                  disabled
                />

                <FormControl
                  type="submit"
                  className="btn btn-primary w-100 py-3 mt-4"
                  value="Submit Package"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRides;
