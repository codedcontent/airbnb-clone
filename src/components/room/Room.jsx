import React from "react";
import Header from "../home/header/Header";
import ListingDescription from "./listingDescription/ListingDescription";

const Room = () => {
  return (
    <div className="">
      {/* Header */}
      <Header />

      {/* Room In-depth description */}
      <ListingDescription />
    </div>
  );
};

export default Room;
