import React from "react";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import AirbnbHomesFilters from "./AirbnbHomesFilters/AirbnbHomesFilters";
import AirbnbListings from "./airbnbListings/AirbnbListings";
import Footer from "./footer/Footer";
import AirbnbMap from "./airbnbMap/AirbnbMap";

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

      {/* Show map hover-guide */}
      <AirbnbMap />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
