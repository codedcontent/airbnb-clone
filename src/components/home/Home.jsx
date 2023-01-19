import React from "react";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import AirbnbHomesFilters from "./AirbnbHomesFilters/AirbnbHomesFilters";
import AirbnbListings from "./airbnbListings/AirbnbListings";

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

      {/* Airbnb Listings */}
      <AirbnbListings />
    </div>
  );
};

export default Home;
