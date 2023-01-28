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

const ListingFooter = () => {
  return (
    <div className="w-full bg-[#F7F7F7] border-y-[1px]">
      <div className="w-full px-52">
        {/* Other options */}
        <div className="w-full py-10 gap-6">
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

          <div className="mt-10 w-max flex gap-2 justify-center items-center">
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
    </div>
  );
};

export default ListingFooter;
