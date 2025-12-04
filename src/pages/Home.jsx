import React from "react";
import { AuthContext } from "../provider/AuthProvider";
import Carousel from "../components/Carousel";
import PopularToys from "../components/PopularToys";
import { useLoaderData } from "react-router";
import CustomerReviews from "../components/CustomerReviews";
import Newsletter from "../components/Newsletter";
import Stats from "../components/Stats";

const Home = () => {
  const toys = useLoaderData().data.slice(0, 8);
  return (
    <div>
      <Carousel></Carousel>
      <PopularToys toys={toys}></PopularToys>
      <CustomerReviews></CustomerReviews>
      <Stats></Stats>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
