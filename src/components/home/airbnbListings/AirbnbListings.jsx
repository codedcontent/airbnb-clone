import React from "react";
import AirbnbListing from "./airbnbListing/AirbnbListing";

const AirbnbListings = () => {
  return (
    <div className="xl:px-20 w-full grid xl:grid-cols-4 gap-6 justify-between items-center">
      <AirbnbListing />
      <p className="w-full">Listing</p>
      <p className="w-full">Listing</p>
      <p className="w-full">Listing</p>
    </div>
  );
};

export default AirbnbListings;
