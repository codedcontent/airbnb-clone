import React from "react";
import useAppState from "../../../hooks/useAppState";

const MainFooter = () => {
  const { appState, setAppState } = useAppState();

  // Destructuring app state
  const { isSupportOpen } = appState;

  const openSupportAndResources = () => {
    setAppState((prev) => ({ ...prev, isSupportOpen: true }));
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-2 items-center">
        <a href="#" className="font-light text-sm">
          © 2023 Airbnb, Inc.
        </a>

        <p className="text-black text-sm">•</p>

        <a href="#" className="font-light text-sm">
          Terms
        </a>

        <p className="text-black text-sm">•</p>

        <a href="#" className="font-light text-sm">
          Sitemap
        </a>

        <p className="text-black text-sm">•</p>

        <a href="#" className="font-light text-sm">
          Privacy
        </a>

        <p className="text-black text-sm">•</p>

        <a href="#" className="font-light text-sm">
          Your Privacy Choices
        </a>

        <p className="text-black text-sm">•</p>

        <a href="#" className="font-light text-sm">
          Destinations
        </a>
      </div>

      <div className="flex gap-4">
        {/* Language */}
        <div className="flex gap-2 place-items-center">
          <i className="fa-solid fa-globe fa-sm"></i>
          <p className="font-semibold text-sm">English (US)</p>
        </div>

        {/* Currency */}
        <div className="flex gap-2 place-items-center">
          <p className="font-semibold text-sm">$</p>

          <p className="font-semibold text-sm">USD</p>
        </div>

        {/* Support */}
        <div className="flex gap-2 place-items-center">
          <p className="font-light text-sm">Support & resources</p>

          <i
            className="fa-solid fa-angle-up mt-0.5 cursor-pointer"
            onClick={openSupportAndResources}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
