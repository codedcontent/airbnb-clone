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
    <div className="w-full bg-[#F7F7F7] px-52 py-4">
      <div className="w-full">
        {/* Other options */}
        <div className="w-full">
          <p className="font-medium text-xl">
            Explore other options in and around Ponta Delgada
          </p>

          <div className="grid grid-cols-4 w-full gap-4">
            {otherOptions.map((otherOption, index) => (
              <p key={index} className="text-[#717171] w-max font-light">
                {otherOption}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingFooter;
