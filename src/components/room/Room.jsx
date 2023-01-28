import React from "react";
import Header from "../home/header/Header";
import ListingDescription from "./listingDescription/ListingDescription";
import ListingFooter from "./ListingFooter";

const Room = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <Header />

      {/* Room In-depth description */}
      <ListingDescription />

      {/* Listing footer */}
      <ListingFooter />
    </div>
  );
};

export default Room;
