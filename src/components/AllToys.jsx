import React from "react";
import ToyCard from "./ToyCard";

const AllToys = ({ toys }) => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
        {toys.map((toy) => (
          <ToyCard key={toy.toyId} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default AllToys;
