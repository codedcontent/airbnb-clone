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
    <div className={`h-full flex items-center w-full`}>
      <i
        className="fa-solid fa-xmark absolute left-5 top-4 cursor-pointer"
        onClick={closeSupportAndResources}
      ></i>

      <div className="grid grid-cols-4 items-start justify-center gap-4 w-full">
        {/* Support */}
        <div className="space-y-5 text-sm grid">
          <p className="font-semibold">Support</p>

          {supportContent.map((content, index) => (
            <p className="w-full" key={index}>
              <a href="#" className="font-light w-max">
                {content}
              </a>
            </p>
          ))}
        </div>

        {/* Community */}
        <div className="space-y-5 text-sm grid">
          <p className="font-semibold">Community</p>

          {communityContent.map((content, index) => (
            <p className="w-full" key={index}>
              <a href="#" className="font-light w-max">
                {content}
              </a>
            </p>
          ))}
        </div>

        {/* Hosting */}
        <div className="space-y-5 text-sm grid">
          <p className="font-semibold">Hosting</p>

          {hostingContent.map((content, index) => (
            <p className="w-full" key={index}>
              <a href="#" className="font-light w-max">
                {content}
              </a>
            </p>
          ))}
        </div>

        {/* Airbnb */}
        <div className="space-y-5 text-sm grid">
          <p className="font-semibold">Airbnb</p>

          {airbnbContent.map((content, index) => (
            <p className="w-full" key={index}>
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
