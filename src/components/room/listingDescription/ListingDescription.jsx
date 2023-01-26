import React from "react";
import ListingCheckIn from "../listingCheckIn/ListingCheckIn";
import ListingReview from "../listingReview/ListingReview";

const ListingDescription = () => {
  return (
    <div className="px-52 py-4">
      {/* Listing title */}
      <div className="flex gap-2 items-center w-max">
        <i className="fa-solid fa-language fa-xl"></i>

        <p className="font-medium text-2xl">
          Lov 'Nid Passion cabin for 2 people
        </p>
      </div>

      {/* Listing review and other buttons */}
      <div className="flex justify-between items-center mt-2">
        {/* Review count and destination location */}
        <div className="flex justify-between items-center gap-2">
          <a href="#" className="underline text-sm font-medium">
            2 reviews
          </a>

          <span className="text-xs self-end">•</span>

          <a href="#" className="underline text-sm font-medium">
            Joncherey, Bourgogne-Franche-Comté, France
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
      <div className="grid gap-2 grid-cols-4 grid-rows-2 mt-6 relative">
        <div className="bg-accent transition-all duration-300 hover:brightness-75 w-full col-span-2 row-span-2 rounded-l-2xl">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720"
            alt="room destination image"
            className="object-cover h-[360px] w-full rounded-l-2xl"
          />
        </div>

        <div className="bg-accent transition-all duration-300 hover:brightness-75 h-44 w-full">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/5d54cea0-788e-462e-83a3-5142da58193a.jpeg?im_w=720"
            alt="image-2"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="bg-accent transition-all duration-300 hover:brightness-75 h-44 w-full rounded-tr-2xl">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/108657cd-1b06-4510-9556-59b53a48d5b9.jpeg?im_w=720"
            alt="image-3"
            className="object-cover h-full w-full rounded-tr-2xl"
          />
        </div>

        <div className="bg-accent transition-all duration-300 hover:brightness-75 h-44 w-full">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/19a492ca-0e15-4b4b-9711-6000b657c094.jpeg?im_w=720"
            alt="image-4"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="bg-accent transition-all duration-300 hover:brightness-75 h-44 w-full rounded-br-2xl">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/eb5b6b2f-7815-42f3-b804-c1030c21596e.jpeg?im_w=720"
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
              <p className="text-xl font-medium">Treehouse hosted by Gaspard</p>

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
            <a href="#profile-pic cursor-pointer">
              <img
                src="https://a0.muscache.com/im/pictures/user/a6ccc650-1184-4401-8f29-4a7aabfc140b.jpg?aki_policy=profile_large"
                alt="profile pic"
                className="w-14 h-14 rounded-full"
              />
            </a>
          </div>

          {/* About host experience */}
          <div className="space-y-6 py-10">
            {/* Experience */}
            <div className="flex gap-4 justify-start items-start">
              <div className="self-start">
                <i className="fa-regular fa-star fa-xl text-[#333333]"></i>
              </div>

              <div className="space-y-0.5">
                <p className="font-medium">Experienced host</p>

                <p className="text-sm text-gray-500 font-light">
                  Gaspard has 117 reviews for other places.
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-4 justify-start items-start">
              <div className="self-start">
                <i className="fa-regular fa-heart fa-xl text-[#333333]"></i>
              </div>

              <div className="space-y-0.5">
                <p className="font-medium">Highly rated Host</p>

                <p className="text-sm text-gray-500 font-light">
                  Gaspard has received 5-star ratings from 90% of recent guests.
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
              Discover the Lov 'Nid Passion cabin, a cocoon of love perched at a
              height of 6 meters. Enjoy the charming surroundings of this
              romantic place to stay surrounded by nature.
            </p>

            <div className="w-full">
              <p className="font-medium">The space</p>
              <p className="font-light truncate overflow-hidden w-full">
                You will access it with a spiral staircase that will take you to
                the first part of the treehouse, consisting of a living room to
                enjoy cocooning moments. A hanging
              </p>
            </div>

            <div className="flex gap-1 place-items-center cursor-pointer">
              <p className="font-medium text-sm">Show more</p>

              <i className="fa-solid fa-chevron-right fa-xs"></i>
            </div>
          </div>

          {/* Listing offerings */}
          <div className="space-y-5 py-10">
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

            <button className="px-5 py-3 border-[1px] border-black rounded-md hover:bg-gray-100">
              Show all 12 amenities
            </button>
          </div>
        </div>

        {/* Sticky Listing Price */}
        <div className="sticky top-36 w-max h-max space-y-4 flex flex-col place-items-center">
          <div className="bg-white w-96 h-96 rounded-xl border-[1px] border-myGray shadow-lg"></div>
          <p className="text-sm text-myGray">Report this listing</p>
        </div>
      </div>

      <div className="w-full divide-y-[1px]">
        {/* Listing check-in */}
        <div className="py-10">
          <ListingCheckIn />
        </div>

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
            <div className="absolute top-1/2 left-1/2 h-10 w-10 flex justify-center items-center bg-accent rounded-full -translate-x-1/2 -translate-y-1/2">
              <i class="fa-solid fa-house text-white"></i>
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
                  <i class="fa-solid fa-person fa-xl text-[#FDBF2D] transition group-hover:skew-x-12"></i>
                </div>

                <div className="bg-white py-2 w-full rounded-md shadow-lg hover:bg-gray-100 cursor-pointer divide-y-2 flex flex-col gap-3">
                  <div className="w-full flex justify-center items-center">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>

                  <div className="w-full flex justify-center items-center pt-3">
                    <i class="fa-solid fa-plus"></i>
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
      </div>
    </div>
  );
};

export default ListingDescription;
