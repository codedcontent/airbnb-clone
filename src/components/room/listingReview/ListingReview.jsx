import React from "react";

const ListingReview = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex place-items-center w-max">
        <i class="fa-solid fa-star"></i>
        <p className="text-xl font-medium">
          <span>4.96</span>
          <span>•</span>
          <span>169 reviews</span>
        </p>
      </div>
    </div>
  );
};

export default ListingReview;
