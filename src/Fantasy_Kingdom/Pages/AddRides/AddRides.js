import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddRides.css";

const AddRides = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container my-4">
      <div>
        <div>
          <h1 className="text-end" style={{ fontFamily: "'Teko', sans-serif" }}>
            <span style={{ color: "#FF6600" }}>ADMIN</span> PANEL
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="shadow-lg p-5 mt-4 fromContainer w-75">
            <div className="addPackageText mt-4 mb-5">
              <h1>Add Rides Package</h1>
            </div>
            <div className="text-start">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Label>Rides Package Name</Form.Label>
                <FormControl
                  className="w-100 mb-4"
                  id="rideName"
                  type="text"
                  placeholder="Rides Package Name"
                  required
                  {...register("rideName")}
                />
                <Form.Label>Description</Form.Label>
                <FormControl
                  as="textarea"
                  className="w-100 mb-4"
                  id="description"
                  placeholder="Description"
                  required
                  {...register("description")}
                />
                <Form.Label>Price</Form.Label>
                <FormControl
                  className="w-100 mb-4"
                  type="number"
                  id=""
                  placeholder="Package Price"
                  required
                  {...register("price")}
                />

                <Form.Label>Package Image Url</Form.Label>
                <FormControl
                  className="w-100 mb-4"
                  type="url"
                  id="imageUrl"
                  placeholder="Rides Package Image Url"
                  required
                  {...register("image")}
                />

                <FormControl
                  className="w-100 mb-4"
                  type="file"
                  id="image"
                  required
                  {...register("image")}
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
