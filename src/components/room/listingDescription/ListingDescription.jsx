import React, { useEffect } from "react";
import { useState } from "react";
import ListingCheckIn from "../listingCheckIn/ListingCheckIn";
import ListingReview from "../listingReview/ListingReview";
import ListingHeader from "./ListingHeader";
import ThingsToKnow from "./ThingsToKnow";

const ListingDescription = () => {
  const [showListingHeader, setShowListingHeader] = useState(false);
  const [showNavReserve, setShowNavReserve] = useState(false);

  // UseEffect to hide and show price carousel
  useEffect(() => {
    const reserveButton = document.getElementById("reserveListingButton");

    const handleScroll = () => {
      const rect = reserveButton.getBoundingClientRect();

      // Check if the button is no longer visible
      if (rect.bottom <= 75) {
        setShowNavReserve(true);
      } else {
        setShowNavReserve(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // UseEffect to hide and show main header
  useEffect(() => {
    const imageGallery = document.getElementById("imageGallery");

    const handleScroll = () => {
      const rect = imageGallery.getBoundingClientRect();

      // Check if the button is no longer visible
      if (rect.bottom <= 0) {
        setShowListingHeader(true);
      } else {
        setShowListingHeader(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="px-52 py-5">
      {/* Listing header */}
      {showListingHeader && <ListingHeader show={showNavReserve} />}

      {/* Listing title */}
      <div className="flex gap-2 items-center w-max">
        <i className="fa-solid fa-language fa-xl"></i>

        <p className="font-medium text-2xl">Flea Windmill | The Mill</p>
      </div>

      {/* Listing review and other buttons */}
      <div className="flex justify-between items-center mt-2">
        {/* Review count and destination location */}
        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-center items-center w-max gap-1">
            <i className="fa-solid fa-star fa-xs"></i>

            <p className="text-sm font-medium">4.96</p>
          </div>

          <span className="text-xs self-end">•</span>

          <a href="#" className="underline text-sm font-medium">
            169 reviews
          </a>

          <span className="text-xs self-end">•</span>

          <a href="#" className="underline text-sm font-medium">
            Ponta Delgada, S. Miguel - Açores, Portugal
          </a>
        </div>

        {/* Share and Save button */}
        <div className="flex gap-6">
          <div className="flex justify-center items-center gap-1.5">
            <i className="fa-regular fa-share-from-square"></i>

            <a href="#" className="underline text-sm font-medium">
              Share
            </a>
          </div>

          <div className="flex justify-center items-center gap-1.5">
            <i className="fa-regular fa-heart"></i>

            <a href="#" className="underline text-sm font-medium">
              Save
            </a>
          </div>
        </div>
      </div>

      {/* Listing destination brief images */}
      <div
        id="imageGallery"
        className="grid gap-2 grid-cols-4 grid-rows-2 mt-6 relative"
      >
        <div className="bg-accent transition-all duration-300 hover:brightness-75 w-full col-span-2 row-span-2 rounded-l-2xl">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720"
            alt="room destination image"
            className="object-cover h-[360px] w-full rounded-l-2xl"
          />
        </div>

        <div className="bg-accent transition-all duration-300 hover:brightness-75 h-44 w-full">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/e3beaf52-13ab-44ed-bbfa-56ccf43bab98.jpeg?im_w=720"
            alt="image-2"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="bg-accent transition-all duration-300 hover:brightness-75 h-44 w-full rounded-tr-2xl">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/858b29eb-53f3-4707-87a6-444f4375f888.jpeg?im_w=720"
            alt="image-3"
            className="object-cover h-full w-full rounded-tr-2xl"
          />
        </div>

        <div className="bg-accent transition-all duration-300 hover:brightness-75 h-44 w-full">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/bc9fdbba-a126-4357-946b-4d5f5581ca0f.jpeg?im_w=720"
            alt="image-4"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="bg-accent transition-all duration-300 hover:brightness-75 h-44 w-full rounded-br-2xl">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/d1e6500a-3b0f-451d-8f6e-a6f067930a0d.jpeg?im_w=720"
            alt="image-5"
            className="object-cover h-full w-full rounded-br-2xl"
          />
        </div>

        {/* Show all photos */}
        <div className="absolute bottom-5 right-5 z-50 bg-white border-[1px] border-black px-5 py-1.5 rounded-lg flex justify-center items-center gap-2">
          <i className="fa-solid fa-grip-vertical"></i>

          <p className="text-sm font-medium">Show all photos</p>
        </div>
      </div>

      {/* Listing full description */}
      <div className="flex mt-12">
        <div className="w-3/5 flex-1 pr-20 divide-y-[1px]">
          {/* Listing host */}
          <div className="flex justify-between items-center pb-6">
            <div className="grid gap-1.5">
              <p className="text-xl font-medium">Windmill hosted by Moinho</p>

              <div className="space-x-2 flex">
                <p className="font-light text-sm">2 guests</p>
                <span className="text-xs font-thin self-end">•</span>
                <p className="font-light text-sm">1 bedroom</p>
                <span className="text-xs font-thin self-end">•</span>
                <p className="font-light text-sm">1 bed</p>
                <span className="text-xs font-thin self-end">•</span>
                <p className="font-light text-sm">1 bath</p>
              </div>
            </div>

            {/* Profile pic */}
            <a href="#hostInfo">
              <img
                src="https://a0.muscache.com/im/pictures/user/a6ccc650-1184-4401-8f29-4a7aabfc140b.jpg?aki_policy=profile_large"
                alt="profile pic"
                className="w-14 h-14 rounded-full"
              />
            </a>
          </div>

          {/* Features and some info about listing */}
          <div className="space-y-6 py-10">
            <div className="flex gap-4 justify-start items-start">
              <div className="self-start">
                <i className="fa-solid fa-house-laptop fa-xl"></i>
              </div>

              <div className="space-y-0.5">
                <p className="font-medium">Dedicated workspace</p>

                <p className="text-sm text-gray-500 font-light">
                  A private room with wifi that's well-suited for working.
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-4 justify-start items-start">
              <div className="self-start">
                <i className="fa-solid fa-door-open fa-xl text-[#333333]"></i>
              </div>

              <div className="space-y-0.5">
                <p className="font-medium">Self check-in</p>

                <p className="text-sm text-gray-500 font-light">
                  Check yourself in with the keypad.
                </p>
              </div>
            </div>

            {/* Cancelation */}
            <div className="flex gap-4 justify-start items-start">
              <div className="self-start">
                <i className="fa-regular fa-calendar fa-xl text-[#333333]"></i>
              </div>

              <div className="space-y-0.5">
                <p className="font-medium">Free cancellation for 48 hours.</p>
              </div>
            </div>
          </div>

          {/* Air Cover */}
          <div className="flex flex-col gap-3 py-10">
            <p className="flex w-max text-3xl font-bold">
              <span className="text-accent">air</span>
              <span className="text-black">cover</span>
            </p>

            <p className="font-light">
              Every booking includes free protection from Host cancellations,
              listing inaccuracies, and other issues like trouble checking in.
            </p>

            <a href="#" className="underline mt-1 font-medium">
              Learn more
            </a>
          </div>

          {/* About listing space */}
          <div className="space-y-4 py-10">
            <div className="flex gap-2 place-items-center">
              <i className="fa-solid fa-language"></i>

              <p className="font-light text-sm">
                Some info has been automatically translated.{" "}
                <span className="underline cursor-pointer font-medium">
                  Show original language
                </span>
              </p>
            </div>

            <p className="font-light">
              Built in the 19th century, with a 360 degrees view over the sea
              and surroundings on the top floor.
            </p>

            <p className="font-light">
              It features a Bedroom with a king size bed, a very well-decorated
              living room with kitchenette, and a WC.
            </p>

            <p className="font-light truncate overflow-hidden w-full">
              Free WiFi, air conditioning, Led TV and DVD player. Private
              parking inside the premises, providing extra security
            </p>

            <div className="flex gap-1 place-items-center cursor-pointer">
              <p className="font-medium text-sm">Show more</p>

              <i className="fa-solid fa-chevron-right fa-xs"></i>
            </div>
          </div>

          {/* Sleeping place */}
          <div className="py-10 space-y-5">
            <p className="text-xl font-medium">Where you'll sleep</p>

            <div className="p-6 border-[1px] w-max pr-20 rounded-lg">
              <i className="fa-solid fa-bed fa-xl"></i>
              <p className="font-medium mt-5">Bedroom</p>
              <p className="font-light mt-2 text-sm">1 double bed</p>
            </div>
          </div>

          {/* Listing offerings */}
          <div className="flex flex-col gap-5 py-10">
            <p className="text-xl font-medium">What this place offers</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-4 place-items-center">
                <i className="fa-solid fa-leaf"></i>

                <p className="font-light">Garden view</p>
              </div>

              <div className="flex gap-4 place-items-center">
                <i className="fa-solid fa-mountain-city"></i>

                <p className="font-light">Mountain view</p>
              </div>

              <div className="flex gap-4 place-items-center">
                <i className="fa-solid fa-umbrella-beach"></i>

                <p className="font-light">Beach access - Beachfront</p>
              </div>

              <div className="flex gap-4 place-items-center">
                <i className="fa-solid fa-kitchen-set"></i>

                <p className="font-light">Kitchen</p>
              </div>

              <div className="flex gap-4 place-items-center">
                <i className="fa-solid fa-tv"></i>

                <p className="font-light">
                  HDTV with standard cable, premium cable
                </p>
              </div>

              <div className="flex gap-4 place-items-center">
                <i className="fa-solid fa-car"></i>

                <p className="font-light">Free parking on premises </p>
              </div>

              <div className="flex gap-4 place-items-center">
                <i className="fa-solid fa-wifi"></i>

                <p className="font-light">Wifi</p>
              </div>
            </div>

            <button className="px-5 py-3 w-max mt-10 border-[1px] border-black rounded-md hover:bg-gray-100">
              Show all 12 amenities
            </button>
          </div>

          {/* Listing check-in */}
          <div className="py-10">
            <ListingCheckIn />
          </div>

          <hr />
        </div>

        {/* Sticky Listing Price */}
        <div className="sticky top-32 w-[374px] h-max space-y-4 flex flex-col place-items-center">
          <div className="bg-white w-full  rounded-xl border-[1px] border-myGray shadow-lg flex-col flex justify-center items-center p-6 gap-4">
            {/* Price */}
            <div className="flex justify-between w-full items-center">
              {/* Price */}
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-1">
                  <p className="font-medium text-xl">$348</p>{" "}
                  <span className="text-sm text-light">night</span>
                </div>
              </div>

              {/* Review and rating shit */}
              <div className="flex justify-center items-center gap-1 w-full">
                <i className="fa-solid fa-star fa-xs"></i>
                <span className="text-sm font-medium">4.96</span>
                <span className="text-xs font-light self-end">•</span>
                <span className="text-sm font-medium text-[#717171] underline">
                  169 reviews
                </span>
              </div>
            </div>

            {/* Reserve dates and guest */}
            <div className="w-full mt-2 cursor-pointer">
              {/* Check in && check out */}
              <div className="flex divide-x-[1px] border-myGray rounded-t-md w-full justify-between items-center border-[1px] border-b-0">
                <div className="w-full p-3">
                  <p className="text-[10px] font-semibold">CHECK-IN</p>
                  <p className="text-sm font-light">8/26/2023</p>
                </div>

                <div className="w-full p-3">
                  <p className="text-[10px] font-semibold">CHECKOUT</p>
                  <p className="text-sm font-light">8/31/2023</p>
                </div>
              </div>

              {/* Guest */}
              <div className="flex border-myGray rounded-b-md w-full justify-between items-center border-[1px] p-3">
                <div className="w-full">
                  <p className="text-xs font-medium">GUESTS</p>
                  <p className="text-sm font-light">1 guest</p>
                </div>

                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>

            {/* Reserve button */}
            <div id="reserveListingButton" className="w-full">
              <button className="w-full py-3 bg-[#F2265E] text-white rounded-lg">
                Reserve
              </button>
            </div>

            <p className="font-light text-sm">You won't be charged yet</p>

            {/* price break down */}
            <div className="divide-y-[1px] w-full">
              <div className="flex w-full justify-between mb-6 my-4">
                <div className="font-light underline text-sm">
                  $368 x 5 nights
                </div>

                <div className="font-light underline text-sm">$1,740</div>
              </div>

              <div className="flex w-full justify-between pt-4">
                <div className="font-medium">Total before taxes</div>

                <div className="font-light underline text-sm">$1,740</div>
              </div>
            </div>
          </div>

          {/* Rare find */}
          <div className="p-4 flex border-2 place-items-center gap-4 rounded-xl">
            <p className="font-light">
              <span className="font-medium"> This is a rare find</span> Moinho's
              place on Airbnb is usually fully booked.
            </p>

            <i className="fa-regular fa-gem fa-2x text-accent"></i>
          </div>

          {/* Report listing */}
          <div className="flex justify-center items-center gap-4 text-[#717171] cursor-pointer">
            <i className="fa-solid fa-flag fa-sm"></i>

            <p className="text-sm underline font-medium">Report this listing</p>
          </div>
        </div>
      </div>

      {/* After our sticky card */}
      <div className="w-full divide-y-[1px]">
        {/* Listing reviews */}
        <div className="py-10">
          <ListingReview />
        </div>

        {/* Listing map location */}
        <div className="py-10 flex flex-col gap-4">
          <p className="font-medium text-xl">Where you'll be</p>

          <p className="font-light">
            Ponta Delgada, S. Miguel - Açores, Portugal
          </p>

          <div className="w-full h-[470px] mt-2 relative">
            <img
              src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
              alt="map image"
              className="w-full h-full object-cover"
            />

            {/* Listing location */}
            <div className="absolute top-1/2 left-1/2 h-10 w-10 flex justify-center items-center bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 cursor-pointer">
              <i className="fa-solid fa-house text-white"></i>
            </div>

            {/* Controls */}
            <div className="absolute right-5 top-5 flex gap-4">
              {/* Transit stuff */}
              <div className="flex gap-2 items-center justify-center bg-white p-2 rounded-md shadow-lg hover:bg-gray-100 cursor-pointer h-max">
                <input
                  type="checkbox"
                  name="public transit"
                  id="publicTransit"
                  className="h-6 w-6"
                />

                <p className="font-medium text-sm">Public Transit</p>
              </div>

              {/* Map controls */}
              <div className="flex flex-col gap-y-2">
                <div className="bg-white group rounded-md p-2 shadow-lg hover:bg-gray-100 cursor-pointer">
                  <i className="fa-solid fa-person fa-xl text-[#FDBF2D] transition group-hover:skew-x-12"></i>
                </div>

                <div className="bg-white py-2 w-full rounded-md shadow-lg hover:bg-gray-100 cursor-pointer divide-y-2 flex flex-col gap-3">
                  <div className="w-full flex justify-center items-center">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <div className="w-full flex justify-center items-center pt-3">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Owner */}
            <p className="absolute bottom-1 left-1 text-sm font-light shadow-md bg-white text-black py-1 px-4 rounded-md">
              Map by Ogechukwu Mephors
            </p>
          </div>
        </div>

        {/* Host Info */}
        <div id="hostInfo" className="w-full py-10 space-y-5">
          <div className="w-max flex items-center gap-5">
            <img
              src="https://a0.muscache.com/im/users/27251904/profile_pic/1423136116/original.jpg?im_w=240"
              alt="profile pic main"
              className="w-16 h-16 rounded-full"
            />

            {/* Name, pic & time joined */}
            <div className="space-y-1">
              <p className="font-medium text-xl">Hosted by Moinho</p>
              <p className="font-light text-sm text-gray-500">
                Joined in February 2015
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 justify-start w-full">
            {/* Left items */}
            <div className="flex flex-col gap-5 pr-32">
              <div className="flex w-max justify-center items-center gap-6">
                <div className="flex gap-3">
                  <i className="fa-solid fa-star"></i>

                  <p className="font-light">254 Reviews</p>
                </div>

                <div className="flex gap-3">
                  <i className="fa-solid fa-shield"></i>

                  <p className="font-light">Identity verified</p>
                </div>
              </div>

              <p className="font-light">
                Situated in Feteiras, 16 km from Ponta Delgada, Moinho das
                Feteiras features a garden and free Wi-Fi.
              </p>

              <p className="font-light">
                All air-conditioned units include a patio, dining area and
                seating area with a flat-screen cable TV. Each unit includes an
                en-suite bathroom with a shower, a hairdryer and free
                toiletries.
              </p>

              <p className="font-light">
                There are barbecue facilities and a terrace at this property.
                Guests can go hiking and biking nearby.
              </p>
            </div>

            {/* Right items */}
            <div className="flex flex-col gap-6 pr-20">
              <div className="flex flex-col gap-3">
                <p className="font-light">Policy number: Exempt</p>

                <p className="font-light">Languages: English, Português</p>

                <p className="font-light">Response rate: 93%</p>

                <p className="font-light">Response time: within an hour</p>
              </div>

              <button className="py-3 px-6 border-[1px] border-black w-max rounded-md">
                Contact Host
              </button>

              <div className="flex items-center gap-4 w-1/2">
                <i className="fa-solid fa-user-shield text-accent"></i>

                <p className="font-extralight text-xs">
                  To protect your payment, never transfer money or communicate
                  outside of the Airbnb website or app.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Things to know */}
        <div id="hostInfo" className="w-full py-10 space-y-5">
          <ThingsToKnow />
        </div>
      </div>
    </div>
  );
};

export default ListingDescription;
