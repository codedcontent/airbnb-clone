import React from "react";

const RatingItem = ({ ratingTitle, rating }) => {
  const ratingPercentage = (rating / 5) * 100;

  console.log(ratingPercentage);

  const ratingProgress = `${ratingPercentage}%`;

  return (
    <div className="w-full flex justify-between items-center pr-20">
      <p className="font-light">{ratingTitle}</p>

      <div className="flex gap-3 items-center justify-start">
        {/* Rating line */}
        <div className="w-32 h-1 rounded-full bg-gray-200 relative">
          <div
            className={`absolute top-0 left-0 h-1 w-full bg-black rounded-full`}
            style={{ width: `${ratingPercentage}%` }}
          ></div>
        </div>

        {/* Rating number */}
        <div className="text-sm font-semibold w-6 text-right">
          {rating.toFixed(1)}
        </div>
      </div>
    </div>
  );
};

export default RatingItem;
