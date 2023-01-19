import React, { useEffect, useRef } from "react";
import useAppState from "../../../../../hooks/useAppState";

const ExpandedSearchComponent = () => {
  const expandedComponentRef = useRef();

  const {
    appState: { initialSearchComponentClicked },
    setAppState,
  } = useAppState();

  const handleClickAway = () => {
    setAppState((prev) => ({
      ...prev,
      initialSearchComponentClicked: false,
    }));
  };

  // UseEffect for clickAway
  useEffect(() => {
    const handleMouseDown = (e) => {
      if (!expandedComponentRef.current.contains(e.target)) {
        // The user clicked away
        handleClickAway();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [expandedComponentRef]);

  return (
    <div ref={expandedComponentRef} className="relative">
      {/* Airbnb offerings */}
      <div className="flex gap-8">
        <p className="font-light cursor-pointer after:transition-all hover:text-gray-400 after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-gray-300 relative hover:after:w-full hover:after:left-0 hover:after:duration-500 hover:after:ease-in-out">
          Stays
        </p>
        <p className="font-light cursor-pointer after:transition-all hover:text-gray-400 after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-gray-300 relative hover:after:w-full hover:after:left-0 hover:after:duration-500 hover:after:ease-in-out">
          Experiences
        </p>
        <p className="font-light cursor-pointer after:transition-all hover:text-gray-400 after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-gray-300 relative hover:after:w-full hover:after:left-0 hover:after:duration-500 hover:after:ease-in-out">
          Online Experiences
        </p>
      </div>

      {/* Search types */}

      {/* Overlay && search inputs */}
    </div>
  );
};

export default ExpandedSearchComponent;
