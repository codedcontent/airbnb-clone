import React from "react";
import useAppState from "../../../../../hooks/useAppState";

const InitialSearchComponent = () => {
  const { appState, setAppState } = useAppState();

  const handleSearchClick = (searchType) => {
    setAppState((prev) => ({
      ...prev,
      initialSearchComponentClicked: true,
      initialSearchComponentClickedType: searchType,
    }));
  };

  return (
    <div className="w-max rounded-full border-[1px] border-gray-300 px-4 py-1.5 hover:shadow-md">
      <div className="flex justify-center items-center h-full divide-x-[1px]">
        <div
          className="h-full cursor-pointer grid place-items-center"
          onClick={() => {
            handleSearchClick("anywhere");
          }}
        >
          <p className="px-4 text-sm font-semibold">Anywhere</p>
        </div>

        <div
          className="h-full cursor-pointer grid place-items-center"
          onClick={() => {
            handleSearchClick("any week");
          }}
        >
          <p className="px-4 text-sm font-semibold">Any week</p>
        </div>

        <div
          className="h-full cursor-pointer grid place-items-center"
          onClick={() => {
            handleSearchClick("add guest");
          }}
        >
          <p className="px-4 text-gray-500 text-sm">Add guest</p>
        </div>

        <div className="bg-accent rounded-full h-8 w-8 grid place-items-center cursor-pointer">
          <i className="fa-solid fa-magnifying-glass text-white fa-xs"></i>
        </div>
      </div>
    </div>
  );
};

export default InitialSearchComponent;
