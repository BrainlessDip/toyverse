import React from "react";
import ToyCard from "./ToyCard";

const PopularToys = ({ toys }) => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-center text-3xl font-bold text-white tracking-wide my-5">
        Popular Toys
        <div className="w-28 h-1 mx-auto mt-2 bg-linear-to-r from-blue-600 to-blue-800 rounded-full shadow-md"></div>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {toys.map((toy) => (
          <ToyCard toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default PopularToys;
