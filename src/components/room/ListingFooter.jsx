import React from "react";

const otherOptions = [
  "Santa Maria Island",
  "Furnas",
  "Vila Franca do Campo",
  "Ribeira Grande",
  "Nordeste",
  "Mosteiros",
  "Sete Cidades",
  "Ribeira Quente",
  "Capelas",
  "Sao Roque",
  "Faial da Terra",
  "Ponta Delgada",
];

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

const ListingFooter = () => {
  return (
    <div className="w-full bg-[#F7F7F7] border-y-2">
      <div className="w-full px-52">
        {/* Other options */}
        <div className="w-full py-12 flex flex-col gap-10">
          <p className="font-medium text-xl">
            Explore other options in and around Ponta Delgada
          </p>

          <div className="grid grid-cols-4 w-full gap-4">
            {otherOptions.map((otherOption, index) => (
              <p
                key={index}
                className="text-[#717171] w-max font-light text-sm"
              >
                {otherOption}
              </p>
            ))}
          </div>

          <div className="w-max flex gap-2 justify-center items-center">
            <p className="text-sm font-extralight">Airbnb</p>

            <i className="fa-solid fa-chevron-right fa-xs"></i>

            <p className="text-sm font-extralight">Portugal</p>

            <i className="fa-solid fa-chevron-right fa-xs"></i>

            <p className="text-sm font-extralight">Azeros</p>

            <i className="fa-solid fa-chevron-right fa-xs"></i>

            <p className="text-sm font-extralight">São Miguel Island</p>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="grid grid-cols-4 items-start justify-center gap-3 w-full px-52 py-12 border-t-2">
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

      <div className="px-52">
        <div className="flex justify-between items-center w-full py-6 border-t-2">
          <div className="flex gap-2 items-center">
            <a href="#" className="font-light text-sm">
              © 2023 Airbnb, Inc.
            </a>

            <p className="text-black text-sm">•</p>

            <a href="#" className="font-light text-sm">
              Terms
            </a>

            <p className="text-black text-sm">•</p>

            <a href="#" className="font-light text-sm">
              Sitemap
            </a>

            <p className="text-black text-sm">•</p>

            <a href="#" className="font-light text-sm">
              Privacy
            </a>

            <p className="text-black text-sm">•</p>

            <a href="#" className="font-light text-sm">
              Your Privacy Choices
            </a>
          </div>

          <div className="flex gap-8">
            {/* Language */}
            <div className="flex gap-2 place-items-center">
              <i className="fa-solid fa-globe fa-sm"></i>
              <p className="font-semibold text-sm">English (US)</p>
            </div>

            {/* Currency */}
            <div className="flex gap-2 place-items-center">
              <p className="font-semibold text-sm">$</p>

              <p className="font-semibold text-sm">USD</p>
            </div>

            {/* Social media */}
            <div className="flex gap-6 place-items-center ml-8">
              <i class="fa-brands fa-facebook-f"></i>

              <i class="fa-brands fa-twitter"></i>

              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingFooter;
