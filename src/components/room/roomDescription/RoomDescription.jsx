import React from "react";

const RoomDescription = () => {
  return (
    <div className="px-52 py-4">
      {/* Room description */}
      <div className="flex gap-2 items-center w-max">
        <i className="fa-solid fa-language fa-xl"></i>

        <p className="font-medium text-2xl">
          Lov 'Nid Passion cabin for 2 people
        </p>
      </div>

      {/* Review and other buttons */}
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
            <i class="fa-regular fa-share-from-square"></i>

            <a href="#" className="underline text-sm font-medium">
              Share
            </a>
          </div>

          <div className="flex justify-center items-center gap-1.5">
            <i class="fa-regular fa-heart"></i>

            <a href="#" className="underline text-sm font-medium">
              Save
            </a>
          </div>
        </div>
      </div>

      {/* Room destination brief images */}
      <div className="grid gap-2 grid-cols-4 grid-rows-2 mt-6 relative">
        <div className="bg-accent transition-all duration-300 hover:brightness-75 w-full col-span-2 row-span-2 rounded-l-2xl">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720"
            alt="room destination image"
            className="object-cover h-[392px] w-full rounded-l-2xl"
          />
        </div>

        <div className="bg-accent transition-all duration-300 hover:brightness-75 h-48 w-full">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/5d54cea0-788e-462e-83a3-5142da58193a.jpeg?im_w=720"
            alt="image-2"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="bg-accent transition-all duration-300 hover:brightness-75 h-48 w-full rounded-tr-2xl">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/108657cd-1b06-4510-9556-59b53a48d5b9.jpeg?im_w=720"
            alt="image-3"
            className="object-cover h-full w-full rounded-tr-2xl"
          />
        </div>

        <div className="bg-accent transition-all duration-300 hover:brightness-75 h-48 w-full">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/19a492ca-0e15-4b4b-9711-6000b657c094.jpeg?im_w=720"
            alt="image-4"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="bg-accent transition-all duration-300 hover:brightness-75 h-48 w-full rounded-br-2xl">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/eb5b6b2f-7815-42f3-b804-c1030c21596e.jpeg?im_w=720"
            alt="image-5"
            className="object-cover h-full w-full rounded-br-2xl"
          />
        </div>

        {/* Show all photos */}
        <div className="absolute bottom-5 right-5 z-50 bg-white border-[1px] border-black px-5 py-1.5 rounded-lg flex justify-center items-center gap-2">
          <i class="fa-solid fa-grip-vertical"></i>

          <p className="text-sm font-medium">Show all photos</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDescription;
