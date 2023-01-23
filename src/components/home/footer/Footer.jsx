import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 bg-white w-full py-3 border-t-[1px] border-gray-200 xl:px-20 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <a href="#" className="font-light text-sm">
          © 2023 Airbnb, Inc.
        </a>
        <p className="text-black text-sm">•</p>
      </div>
    </div>
  );
};

export default Footer;
