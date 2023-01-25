import React, { useState } from "react";
import airbnbListingImage from "../../../../assets/images/airbnb-lising.jpg";

const AirbnbListing = () => {
  const [activeListingImage, setActiveListingImage] = useState(0);

  const [isLiked, setIsLiked] = useState(false);

  const handleCarouselButtonClick = (index) => {
    setActiveListingImage(index);
  };

  const handleCarouselClickRight = () => {
    if (activeListingImage === 4) {
      setActiveListingImage(0);
    } else {
      setActiveListingImage((prev) => prev + 1);
    }
  };

  const handleCarouselClickLeft = () => {
    if (activeListingImage === 0) {
      setActiveListingImage(4);
    } else {
      setActiveListingImage((prev) => prev - 1);
    }
  };

  return (
    <a
      target={"_blank"}
      href="/rooms/123abc"
      className="w-full group grid gap-2 cursor-pointer"
    >
      {/* Listing image, like button and others */}
      <div className="w-full relative">
        {/* Carousel right arrow */}
        {activeListingImage > 0 && (
          <div
            className="absolute left-5 top-1/2 -translate-y-1/2 group-hover:block hidden"
            onClick={handleCarouselClickLeft}
          >
            <i className="fa-solid fa-circle-chevron-left fa-xl text-white"></i>
          </div>
        )}

        <img
          src={airbnbListingImage}
          alt="airbnbListingImage"
          className="w-full h-80 rounded-2xl object-cover"
        />

        {/* Like button */}
        <div
          className="absolute top-5 right-5 hover:scale-110 cursor-pointer"
          onClick={() => {
            setIsLiked((prev) => !prev);
          }}
        >
          {isLiked ? (
            <i className="fa-solid fa-heart fa-xl text-accent transition-all duration-700"></i>
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
        <div
          className="absolute right-5 top-1/2 -translate-y-1/2 group-hover:block hidden"
          onClick={handleCarouselClickRight}
        >
          <i className="fa-solid fa-circle-chevron-right fa-xl text-white"></i>
        </div>
      </div>

      {/* Listing description */}
      <div className="grid px-1">
        {/* Name and rating */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm">La Lajita, Spain</p>

          <div className="flex gap-1 items-center justify-center">
            <i className="fa-solid fa-star fa-xs"></i>
            <p className="font-light text-sm">5.0</p>
          </div>
        </div>

        {/* Location venue */}
        <p className="font-light text-gray-400 text-sm">On Lajita</p>

        {/* Location available times */}
        <p className="font-light text-gray-400 text-sm">Nov 1 - 8</p>

        {/* Price per night */}
        <p className="font-light text-gray-400 text-sm mt-0.5">
          <span className="font-bold text-black">$188</span> night
        </p>
      </div>
    </a>
  );
};

export default AirbnbListing;
