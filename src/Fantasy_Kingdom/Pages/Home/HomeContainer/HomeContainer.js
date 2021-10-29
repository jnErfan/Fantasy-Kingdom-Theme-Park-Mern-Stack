import React from "react";
import FantasyGallery from "../FantasyGallery/FantasyGallery";
import Banner from "../Header/Banner/Banner";
import Rides from "../Rides/Rides";

const HomeContainer = () => {
  return (
    <div className="mb-5">
      <Banner />
      <Rides />
      <FantasyGallery />
    </div>
  );
};

export default HomeContainer;
