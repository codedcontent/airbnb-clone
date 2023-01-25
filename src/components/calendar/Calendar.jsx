import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useEffect } from "react";

const Calendar = () => {
  const [dateRange, handleRangeChange] = useState([new Date(), new Date()]);

  useEffect(() => {
    console.log(dateRange);
  }, [dateRange]);

  return (
    <div className="w-full h-full relative">
      <DateRangePicker
        value={dateRange}
        onChange={handleRangeChange}
        minDate={new Date()}
        format={"dd/MM/y"}
      />
    </div>
  );
};

export default Calendar;
