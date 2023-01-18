import React from "react";
import allAirbnbHomesFilters from "../../../constants/allAirbnbHomesFilters";
import useAppState from "../../../hooks/useAppState";

const AirbnbHomesFilters = () => {
  const {
    appState: { selectedHomeSearchFilter },
  } = useAppState();

  return (
    <div className="xl:px-20 w-full py-4 flex gap- justify-center items-center">
      {/* Home filters */}
      <i class="fa-regular fa-circle-left fa-xl"></i>

      <div className="flex gap-10 justify-center items-center w-full overflow-x-hidden flex-1 pl-20 pr-4">
        {allAirbnbHomesFilters.map((homeFilter, index) => (
          <div
            className={`flex flex-col justify-center items-center gap-2 py-4 cursor-pointer transition-all duration-200 ease-in-out hover:border-b-2 border-b-myGray ${
              selectedHomeSearchFilter === index ? "text-black" : "text-myGray"
            } hover:text-black`}
          >
            <span>{homeFilter.icon}</span>
            <p className={`text-xs font-medium w-max`}>{homeFilter.title}</p>
          </div>
        ))}
      </div>

      <i class="fa-regular fa-circle-right fa-xl"></i>

      {/* Other filters e.g price, location, e.t.c */}
      <div className="flex gap-2 border-2 border-myGray p-4 justify-center items-center rounded-xl">
        <i class="fa-solid fa-sliders fa-xs"></i>

        <p className="text-xs font-bold">Filters</p>
      </div>
    </div>
  );
};

export default AirbnbHomesFilters;
