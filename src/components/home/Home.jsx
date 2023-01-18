import React from "react";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import AirbnbHomesFilters from "./AirbnbHomesFilters/AirbnbHomesFilters";
import HousesFilters from "./AirbnbHomesFilters/AirbnbHomesFilters";

const Home = () => {
  // Banner
  // Header
  // Main
  // Footer
  return (
    <div className="relative min-h-screen bg-white">
      {/* Banner */}
      <Banner />

      {/* Header */}
      <Header />

      {/* Houses filters */}
      <AirbnbHomesFilters />
    </div>
  );
};

export default Home;
