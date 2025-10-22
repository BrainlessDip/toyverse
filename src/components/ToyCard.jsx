import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  return (
    <div>
      <div className="card bg-base-200 w-fit shadow-md rounded-md hover:ring-offset-1">
        <h2 className=" font-bold text-2xl mt-4 text-center text-white">
          {toy.toyName}
        </h2>
        <figure className="relative p-5">
          <div className="absolute top-8 right-8 badge badge-soft badge-accent text-2xl p-5 font-semibold">
            ${toy.price}
          </div>
          <div className="absolute top-8 left-8 badge badge-soft badge-accent text-2xl p-5 font-semibold">
            <CiStar />
            {toy.rating}
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 badge badge-soft badge-accent text-2xl p-5 font-semibold">
            Stock: {toy.availableQuantity}
          </div>
          <img
            src={toy.pictureURL}
            alt="Shoes"
            className="object-cover w-[350px] h-[350px] rounded-md"
          />
        </figure>
        <div className="px-5 pb-5">
          <div className="card-actions justify-end">
            <Link to={`/${toy.toyId}`} className="btn btn-primary">
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
