import React from "react";

const houseRules = [
  "Check-in after 3:00 PM",
  "Checkout before 11:00 AM",
  "2 guests maximum",
];

const safetyAndProperty = [
  "Climbing or play structure",
  "Carbon monoxide alarm",
  "Smoke alarm",
];

const cancellationPolicy = [
  "Free cancellation for 48 hours.",
  "Review the Host's full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.",
];

const ThingsToKnow = () => {
  return (
    <div className="space-y-4">
      <p className="text-xl font-medium">Things to know</p>

      <div className="grid grid-cols-3 justify-start gap-5">
        {/* Text content */}
        <div className="w-full space-y-5">
          <div className="space-y-3">
            <p className="font-medium">House rules</p>

            {houseRules.map((textItem, index) => (
              <p className="font-light" key={index}>
                {textItem}
              </p>
            ))}
          </div>

          {/* Show more */}
          <div className="flex gap-1 place-items-center cursor-pointer">
            <p className="font-medium">Show more</p>

            <i className="fa-solid fa-chevron-right fa-xs"></i>
          </div>
        </div>

        {/* Text content */}
        <div className="w-full space-y-5">
          <div className="space-y-3">
            <p className="font-medium">Safety & property</p>

            {safetyAndProperty.map((textItem, index) => (
              <p className="font-light" key={index}>
                {textItem}
              </p>
            ))}
          </div>

          {/* Show more */}
          <div className="flex gap-1 place-items-center cursor-pointer">
            <p className="font-medium">Show more</p>

            <i className="fa-solid fa-chevron-right fa-xs"></i>
          </div>
        </div>

        {/* Text content */}
        <div className="w-full space-y-5">
          <div className="space-y-3">
            <p className="font-medium">Cancellation policy</p>

            {cancellationPolicy.map((textItem, index) => (
              <p className="font-light" key={index}>
                {textItem}
              </p>
            ))}
          </div>

          {/* Show more */}
          <div className="flex gap-1 place-items-center cursor-pointer">
            <p className="font-medium">Show more</p>

            <i className="fa-solid fa-chevron-right fa-xs"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
