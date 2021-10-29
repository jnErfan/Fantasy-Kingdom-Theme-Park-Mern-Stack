import React from "react";
import AtlantisResort from "../AtlantisResort/AtlantisResort";
import FantasyGallery from "../FantasyGallery/FantasyGallery";
import Banner from "../Header/Banner/Banner";
import Rides from "../Rides/Rides";
import WaterKingdom from "../WaterKingdom/WaterKingdom";

const HomeContainer = () => {
  return (
    <div className="mb-5">
      <Banner />
      <Rides />
      <FantasyGallery />
      <WaterKingdom />
      <AtlantisResort />
    </div>
  );
};

export default HomeContainer;
