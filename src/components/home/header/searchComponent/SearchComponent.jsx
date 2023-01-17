import React from "react";
import useAppState from "../../../../hooks/useAppState";
import InitialSearchComponent from "./initialSearchComponent/InitialSearchComponent";

const SearchComponent = () => {
  const {
    appState: { initialSearchComponentClicked },
    setAppState,
  } = useAppState();

  return (
    <div className="flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {!initialSearchComponentClicked ? (
        // Initial Search component
        <InitialSearchComponent />
      ) : null}
    </div>
  );
};

export default SearchComponent;
