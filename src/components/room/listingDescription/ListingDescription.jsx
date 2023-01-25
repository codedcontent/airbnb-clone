import React from "react";

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
        <div className="flex-1 pr-20 divide-y-[1px]">
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
          <div className="space-y-6 py-6">
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
                <i class="fa-regular fa-heart fa-xl text-[#333333]"></i>
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
                <i class="fa-regular fa-calendar fa-xl text-[#333333]"></i>
              </div>

              <div className="space-y-0.5">
                <p className="font-medium">Free cancellation for 48 hours.</p>
              </div>
            </div>
          </div>

          {/* Air Cover */}
          <div className="flex flex-col gap-3 py-6">
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
        </div>

        {/* Sticky Listing Price */}
        <div className="bg-white sticky top-24 w-96 h-96 rounded-xl border-[1px] border-myGray shadow-xl"></div>
      </div>
    </div>
  );
};

export default ListingDescription;
