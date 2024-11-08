import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <div className="container mx-auto px-5 lgl:px-10">
        <Sale />
        <NewArrivals />
        <BestSellers />
      </div>
    </div>
  );
};

export default Home;
