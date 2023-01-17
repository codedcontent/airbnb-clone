import React from "react";
import useAppState from "../../../hooks/useAppState";
import SearchComponent from "./searchComponent/SearchComponent";

const Header = () => {
  const {
    appState: { initialSearchComponentClicked },
  } = useAppState();

  console.log(initialSearchComponentClicked);

  return (
    <div
      className={`w-full ${
        initialSearchComponentClicked
          ? " items-start pt-4 transition-all h-40 duration-200"
          : "h-20 items-center"
      } flex justify-between  xl:px-20 border-y-[1px] border-y-gray-200 relative `}
    >
      <a className="flex items-center gap-1 justify-center">
        <i className="fa-brands fa-airbnb text-accent fa-2x"></i>
        <span className="text-accent font-black text-xl mb-1">airbnb</span>
      </a>

      <SearchComponent />

      {/* <div className="h-80 w-full bg-black"></div> */}

      <p className="">Others flex-grow flex-grow</p>
    </div>
  );
};

export default Header;
