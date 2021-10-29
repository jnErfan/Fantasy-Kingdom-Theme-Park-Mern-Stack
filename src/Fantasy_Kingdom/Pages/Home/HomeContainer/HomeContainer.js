import React from "react";
import Banner from "../Header/Banner/Banner";
import Rides from "../Rides/Rides";

const HomeContainer = () => {
  return (
    <div className="mb-5">
      <Banner />
      <Rides />
    </div>
  );
};

export default HomeContainer;
