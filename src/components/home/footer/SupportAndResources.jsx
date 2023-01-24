import React from "react";
import useAppState from "../../../hooks/useAppState";

const supportContent = [
  "Help Center",
  "AirCover",
  "Supporting people with disabilities",
  "Cancellation options",
  "Our COVID-19 Response",
  "Report a neighborhood concern",
];

const communityContent = [
  "Airbnb.org: disaster relief housing",
  "Combating discrimination",
];

const hostingContent = [
  "Airbnb your home",
  "AirCover for Hosts",
  "Explore hosting resources",
  "Visit our community forum",
  "How to host responsibly",
];

const airbnbContent = [
  "Newsroom",
  "Learn about new features",
  "Letter from our founders",
  "Careers",
  "Investors",
  "Gift cards",
];

const SupportAndResources = () => {
  const { appState, setAppState } = useAppState();

  // Destructuring app state
  const { isSupportOpen } = appState;

  const closeSupportAndResources = () => {
    setAppState((prev) => ({ ...prev, isSupportOpen: false }));
  };

  return (
    <div
      className="py-12"
      style={{
        boxShadow:
          isSupportOpen &&
          "box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      }}
    >
      <i
        className="fa-solid fa-xmark absolute left-5 top-4 cursor-pointer"
        onClick={closeSupportAndResources}
      ></i>

      <div className="grid grid-cols-4 items-start justify-between gap-4">
        {/* Support */}
        <div className="space-y-3 text-sm grid">
          <p className="font-semibold">Support</p>

          {supportContent.map((content) => (
            <p className="w-full">
              <a href="#" className="font-light w-max">
                {content}
              </a>
            </p>
          ))}
        </div>

        {/* Community */}
        <div className="space-y-3 text-sm grid">
          <p className="font-semibold">Community</p>

          {communityContent.map((content) => (
            <p className="w-full">
              <a href="#" className="font-light w-max">
                {content}
              </a>
            </p>
          ))}
        </div>

        {/* Hosting */}
        <div className="space-y-3 text-sm grid">
          <p className="font-semibold">Hosting</p>

          {hostingContent.map((content) => (
            <p className="w-full">
              <a href="#" className="font-light w-max">
                {content}
              </a>
            </p>
          ))}
        </div>

        {/* Airbnb */}
        <div className="space-y-3 text-sm grid">
          <p className="font-semibold">Airbnb</p>

          {airbnbContent.map((content) => (
            <p className="w-full">
              <a href="#" className="font-light w-max">
                {content}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportAndResources;
