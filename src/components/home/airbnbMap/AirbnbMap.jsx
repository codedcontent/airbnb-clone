import React from "react";

const AirbnbMap = () => {
  return (
    <div className="fixed bottom-16 left-1/2 z-50 -translate-x-1/2">
      <div className="font-medium flex cursor-pointer items-center justify-center gap-2 text-white bg-black px-4 py-3 text-sm rounded-full">
        <p className="ddd">Show Map</p>

        <i className="fa-solid fa-map"></i>
      </div>
    </div>
  );
};

export default AirbnbMap;
