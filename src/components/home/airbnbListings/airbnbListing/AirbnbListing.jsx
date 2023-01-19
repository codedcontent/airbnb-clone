import React, { useState } from "react";
import airbnbListingImage from "../../../../assets/images/airbnb-lising.jpg";

const AirbnbListing = () => {
  const [activeListingImage, setActiveListingImage] = useState(0);

  const [isLiked, setIsLiked] = useState(false);

  const handleCarouselButtonClick = (index) => {
    setActiveListingImage(index);
  };

  return (
    <div className="w-full group">
      {/* Listing image, like button and others */}
      <div className="w-full relative">
        <img
          src={airbnbListingImage}
          alt="airbnbListingImage"
          className="w-full h-72 rounded-2xl object-cover"
        />

        {/* Like button */}
        <div
          className="absolute top-5 right-5 hover:scale-110 cursor-pointer"
          onClick={() => {
            setIsLiked((prev) => !prev);
          }}
        >
          {isLiked ? (
            <i class="fa-solid fa-heart fa-xl text-accent transition-all duration-700"></i>
          ) : (
            <i
              className={`fa-regular fa-heart fa-xl transition-all duration-700 text-white`}
            ></i>
          )}
        </div>

        {/* Image carousel slide button */}
        <div className="flex gap-1 absolute bottom-5 left-1/2 -translate-x-1/2 justify-center items-center">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className={`rounded-full cursor-pointer transition-all duration-300 ${
                  activeListingImage === index
                    ? "bg-accent h-[12px] w-[6px]"
                    : "bg-white h-[6px] w-[6px]"
                }`}
                onClick={() => handleCarouselButtonClick(index)}
              ></div>
            ))}
        </div>

        {/* Carousel right arrow */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 group-hover:block hidden">
          <i className="fa-solid fa-circle-chevron-right fa-xl text-white"></i>
        </div>
      </div>

      {/* Listing description */}
    </div>
  );
};

export default AirbnbListing;
