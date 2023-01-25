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
      <div className="grid gap-1 grid-cols-4">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720"
          alt="room destination image"
          className="col-start-1 col-end-3 w-full object-cover row-span-2"
        />

        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720"
          alt="room destination image"
          className="col-start-3 col-end-4 w-full object-cover"
        />
      </div>
    </div>
  );
};

export default RoomDescription;
