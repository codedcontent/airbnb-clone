import React from "react";
import { useLocation } from "react-router-dom";
import useAppState from "../../../hooks/useAppState";
import SearchComponent from "./searchComponent/SearchComponent";

const Header = () => {
  const {
    appState: { initialSearchComponentClicked },
  } = useAppState();

  const location = useLocation();

  console.log(location);

  return (
    <div
      className={`w-full z-50 bg-white ${
        initialSearchComponentClicked
          ? " items-start pt-9 transition-all duration-200 h-40"
          : "transition-all duration-200 h-20 items-center"
      } flex justify-between border-y-[1px] border-y-gray-200 top-0 left-0 ${
        location.pathname === "/" ? "sticky px-52 xl:px-20" : "px-52"
      }`}
    >
      <a
        className="flex items-center gap-1 justify-center cursor-pointer"
        href="/"
      >
        <i className="fa-brands fa-airbnb text-accent fa-2x"></i>
        <span className="text-accent font-black text-xl mb-1">airbnb</span>
      </a>

      <SearchComponent />

      {/* Account and others */}
      <div className="flex gap-5 justify-center items-center">
        <p className="font-medium text-sm">Airbnb your home</p>

        <i className="fa-solid fa-globe"></i>

        <div className="flex gap-4 border-2 border-gray-300 p-2 py-3 pl-3 rounded-full justify-center items-center">
          <i className="fa-solid fa-bars"></i>

          <i className="fa-solid fa-circle-user fa-2xl text-gray-500"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
