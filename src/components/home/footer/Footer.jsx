import React, { useEffect } from "react";
import useAppState from "../../../hooks/useAppState";
import MainFooter from "./MainFooter";
import SupportAndResources from "./SupportAndResources";

const Footer = () => {
  const { appState, setAppState } = useAppState();

  // Destructuring app state
  const { isSupportOpen } = appState;

  // UseEffect to prevent scroll

  useEffect(() => {
    const handleScroll = () => {
      if (!isSupportOpen) return;

      const topScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      const leftScroll =
        window.pageXOffset || document.documentElement.scrollLeft;

      window.scrollTo({
        top: 0,
        left: 0,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSupportOpen]);

  return (
    <div
      className={`absolute left-0 top-0 z-50 w-screen ${
        isSupportOpen ? "h-screen " : ""
      }`}
    >
      <div
        className={`fixed bottom-0 left-0 py-3 border-t-[1px] border-gray-200 xl:px-20 bg-white w-full
        ${isSupportOpen ? "rounded-xl h-96" : "h-12"}
        `}
        style={{
          boxShadow: isSupportOpen
            ? "rgb(0, 0, 0, 0.5) 0px 0px 10000px 100000px"
            : "",
        }}
      >
        {!isSupportOpen ? <MainFooter /> : <SupportAndResources />}
      </div>
    </div>
  );
};

export default Footer;
