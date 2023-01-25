import React from "react";
import Header from "../home/header/Header";
import RoomDescription from "./roomDescription/RoomDescription";

const Room = () => {
  return (
    <div className="">
      {/* Header */}
      <Header />

      {/* Room In-depth description */}
      <RoomDescription />
    </div>
  );
};

export default Room;
