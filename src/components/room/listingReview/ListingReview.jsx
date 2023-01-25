import React from "react";
import RatingItem from "../../RatingItem";

const ListingReview = () => {
  const ratingItems = [
    {
      ratingTitle: "Cleanliness",
      rating: 4.9,
    },
    {
      ratingTitle: "Accuracy",
      rating: 4.9,
    },
    {
      ratingTitle: "Communication",
      rating: 5.0,
    },
    {
      ratingTitle: "Location",
      rating: 4.9,
    },
    {
      ratingTitle: "Check-in",
      rating: 5.0,
    },
    {
      ratingTitle: "Value",
      rating: 4.9,
    },
    {
      ratingTitle: "Raz",
      rating: 2,
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* Total rating and number of reviews */}
      <div className="flex place-items-center w-max gap-2">
        <i class="fa-solid fa-star"></i>
        <p className="text-xl font-medium flex gap-1">
          <span>4.96</span>
          <span>•</span>
          <span>169 reviews</span>
        </p>
      </div>

      {/* All rating types under this listing */}
      <div className="grid grid-cols-2 gap-3">
        {ratingItems.map((ratingItem, index) => (
          <RatingItem
            key={index}
            ratingTitle={ratingItem.ratingTitle}
            rating={ratingItem.rating}
          />
        ))}
      </div>

      {/* Reviews */}
      <div className="space-y-10">
        <div className="grid grid-cols-2 gap-y-10">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <div
                className="flex flex-col items-start gap-3 pr-20"
                key={index}
              >
                {/* Header, title */}
                <div className="flex gap-2 items-center justify-center">
                  <img
                    src="https://a0.muscache.com/im/pictures/user/216327d1-0667-4af4-a83b-02c9e85338e1.jpg?im_w=240"
                    alt="profile pic"
                    className="rounded-full object-cover w-10 h-10"
                  />

                  <div className="flex-flex-col">
                    <p className="font-medium">Amy</p>
                    <p className="font-light text-gray-400 text-sm">
                      January 2023
                    </p>
                  </div>
                </div>

                {/* Review */}
                <div className="w-full space-y-1.5">
                  <p className="line-clamp-3 font-light">
                    Absolutely incredible stay! The sunset on the first night
                    was absolutely spectator and the breakfast they bring was
                    enough for probably four-six people. There was a mold smell
                    on the absolutely spectator and the breakfast they bring was
                    enough for people. There was a mold smell on the
                  </p>

                  <div className="flex gap-1 place-items-center cursor-pointer">
                    <p className="font-medium text-sm">Show more</p>

                    <i className="fa-solid fa-chevron-right fa-xs"></i>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button className="px-5 py-3 border-[1px] border-black rounded-md hover:bg-gray-100">
          Show all 169 reviews
        </button>
      </div>
    </div>
  );
};

export default ListingReview;
