import React from "react";
import useAppState from "../../../hooks/useAppState";
import MainFooter from "./MainFooter";
import SupportAndResources from "./SupportAndResources";

const Footer = () => {
  const { appState, setAppState } = useAppState();

  // Destructuring app state
  const { isSupportOpen } = appState;

  console.log(isSupportOpen);

  return (
    <div
      className={`fixed z-50 w-screen  ${
        isSupportOpen ? "h-screen bg-red" : ""
      }`}
    >
      <div
        className={`h-max fixed bottom-0 left-0 py-3 border-t-[1px] border-gray-200 xl:px-20 bg-white w-full
        ${isSupportOpen ? "rounded-xl" : ""}
        `}
        style={{
          boxShadow:
            isSupportOpen && "rgb(0, 0, 0, 0.5) 0px 0px 10000px 100000px",
        }}
      >
        {!isSupportOpen ? <MainFooter /> : <SupportAndResources />}
      </div>
    </div>
  );
};

export default Footer;
