import React from "react";
import useAppState from "../../../../hooks/useAppState";
import ExpandedSearchComponent from "./expandedSearchComponent/ExpandedSearchComponent";
import InitialSearchComponent from "./initialSearchComponent/InitialSearchComponent";

const SearchComponent = () => {
  const {
    appState: { initialSearchComponentClicked },
  } = useAppState();

  return (
    <div className="flex justify-center absolute left-1/2 -translate-x-1/2">
      {!initialSearchComponentClicked ? (
        // Initial Search component
        <InitialSearchComponent />
      ) : (
        <ExpandedSearchComponent />
      )}
    </div>
  );
};

export default SearchComponent;
