import React from "react";
import Calendar from "../../calendar/Calendar";

const ListingCheckIn = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xl font-medium">Select check-in date</p>

      <p className="text-sm text-gray-400 font-light">
        Add your travel dates for exact pricing
      </p>

      <div className="mt-2">
        <Calendar />
      </div>
    </div>
  );
};

export default ListingCheckIn;
