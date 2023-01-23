import React, { useEffect, useState } from "react";
import allAirbnbHomesFilters from "../../../constants/allAirbnbHomesFilters";
import useAppState from "../../../hooks/useAppState";

const AirbnbHomesFilters = () => {
  const {
    appState: { selectedHomeSearchFilter },
  } = useAppState();

  // UseEffect for our slider
  useEffect(() => {
    // Is the user dragging the slide or not
    let isDragging = false;

    // The position the slide action started from
    let startPosition = 0;

    // The current x-translate for the slider
    let previousTranslate = 0;

    // The current x-translate for the slider
    let currentTranslate = 0;

    let animationId = 0;

    let currentSlide = 0;

    // Get the users touch start or mouse down position
    const getPositionX = (event) => {
      const eventType = event.type;

      // console.log(eventType);

      return eventType.includes("touch")
        ? event.touches[0].clientX
        : event.pageX;
    };

    const setSliderPosition = (slideItem) => {
      slidesContainer.style.transform = `translate(${currentTranslate}px)`;
    };

    // The slider translate animation
    const slideAnimation = () => {
      setSliderPosition();

      if (isDragging) requestAnimationFrame(slideAnimation);
    };

    const slidesContainer = document.getElementById("slideContainer");

    const slideItems = Array.from(
      document.querySelectorAll(".airbnb-filter-slide-item")
    );

    const touchStart = (index, event) => {
      isDragging = true;

      currentSlide = index;

      startPosition = getPositionX(event);

      // Request an animation frame
      animationId = requestAnimationFrame(slideAnimation);
    };

    const touchEnd = () => {
      isDragging = false;
    };

    const touchMove = (event) => {
      if (isDragging) {
        const moveCurrentPosition = getPositionX(event);
        currentTranslate =
          previousTranslate + moveCurrentPosition - startPosition;

        console.log(previousTranslate);
      }
    };

    slideItems.forEach((slideItem, index) => {
      /**
       * Touch events
       */
      // Touch start - when the user touches the slide item
      slideItem.addEventListener("touchstart", (e) => touchStart(index, e));

      // Touch end - when the user stops touching the slide item
      slideItem.addEventListener("touchend", touchEnd);

      // Touch end - when the user starts moving the slide item whole touching it
      slideItem.addEventListener("touchmove", touchMove);

      /**
       * Mouse events
       */

      // Mouse down - When the user clicks down on a slide item
      slideItem.addEventListener("mousedown", (e) => touchStart(index, e));

      // Mouse up - When the user is no longer clicking down on a slide item
      slideItem.addEventListener("mouseup", () => touchEnd);

      // Mouse up - When the user moves away from a slide item
      slideItem.addEventListener("mouseleave", () => touchEnd);

      // Mouse up - When the user moves the cursor around the slide item
      slideItem.addEventListener("mousemove", () => touchMove);
    });
  }, []);

  return (
    <div className="xl:px-20 w-full flex gap-1 sticky top-20 left-0 justify-center items-center bg-white z-50">
      <i className="fa-regular fa-circle-left fa-xl"></i>

      {/* Home filters */}
      <div
        className="flex gap-10 justify-start items-center w-full overflow-x-hidden"
        id="slideContainer"
      >
        {allAirbnbHomesFilters.map((homeFilter, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center gap-2 py-4 cursor-pointer transition-all duration-200 ease-in-out hover:border-b-2 border-b-myGray select-none w-max ${
              selectedHomeSearchFilter === index ? "text-black" : "text-myGray"
            } hover:text-black airbnb-filter-slide-item`}
          >
            <span>{homeFilter.icon}</span>
            <p className={`text-xs font-medium w-max`}>{homeFilter.title}</p>
          </div>
        ))}
      </div>

      <i className="fa-regular fa-circle-right fa-xl"></i>

      {/* Other filters e.g price, location, e.t.c */}
      <div className="flex gap-2 border-2 border-myGray p-4 justify-center items-center rounded-xl">
        <i className="fa-solid fa-sliders fa-xs"></i>

        <p className="text-xs font-bold">Filters</p>
      </div>
    </div>
  );
};

export default AirbnbHomesFilters;
