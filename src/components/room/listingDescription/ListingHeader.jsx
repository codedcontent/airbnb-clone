import React from "react";

const ListingHeader = ({ show }) => {
  const leftContent = ["Photos", "Amenities", "Reviews", "Location"];

  return (
    <div className="fixed w-full h-20 border-b-[1px] bg-white top-0 left-0 flex justify-between items-center px-52 z-50">
      {/* Page Nav */}
      <div className="flex gap-6 h-full">
        {leftContent.map((content, index) => (
          <a
            key={index}
            href="#"
            className="h-full w-max flex items-center justify-center relative border-black after:content-[''] after:w-full after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-black after:hidden hover:after:block font-medium"
          >
            {content}
          </a>
        ))}
      </div>

      {/* Reserve listing */}
      {show && (
        <div className="flex w-64 justify-end items-center">
          <div className="w-full space-y-0.5">
            <p className="font-medium text-sm">
              $384 <span className="font-light">night</span>
            </p>

            <div className="space-x-1 gap-1 w-full text-xs">
              <i className="fa-solid fa-star fa-xs"></i>
              <span className="font-medium w-full">4.96</span>
              <span className="text-xs font-light self-end">•</span>
              <span className="font-medium text-[#717171] underline w-full">
                169 reviews
              </span>
            </div>
          </div>

          {/* Reserve */}
          <button className="px-6 py-3 bg-[#F2265E] text-white rounded-lg">
            Reserve
          </button>
        </div>
      )}
    </div>
  );
};

export default ListingHeader;
