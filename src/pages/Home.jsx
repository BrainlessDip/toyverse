import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Carousel from "../components/Carousel";
import PopularToys from "../components/PopularToys";
import { useLoaderData } from "react-router";

const Home = () => {
  const { user, setUser } = use(AuthContext);
  const toys = useLoaderData().data;

  return (
    <div>
      <Carousel></Carousel>
      <PopularToys toys={toys}></PopularToys>
    </div>
  );
};

export default Home;
