import React from "react";
import { AuthContext } from "../provider/AuthProvider";
import Carousel from "../components/Carousel";
import PopularToys from "../components/PopularToys";
import { useLoaderData } from "react-router";
import CustomerReviews from "../components/CustomerReviews";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const toys = useLoaderData().data;

  return (
    <div>
      <Carousel></Carousel>
      <PopularToys toys={toys}></PopularToys>
      <CustomerReviews></CustomerReviews>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
