import React from "react";
import { useLoaderData } from "react-router";

const ToyDetails = () => {
  const toys = useLoaderData().data;
  console.log(toys);

  return <div></div>;
};

export default ToyDetails;
