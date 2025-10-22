import React, { useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { Link, useLoaderData, useParams } from "react-router";

const ToyDetails = () => {
  const toys = useLoaderData().data;
  const { toyId } = useParams();
  const toy = toys.find((toy) => toyId == toy.toyId);

  useEffect(() => {
    document.title = `${toy?.toyName || "Toy Not Found"} | Toy Verse`;
  }, [toy]);

  if (toy) {
    return (
      <>
        <div>
          <h1 className="text-center text-3xl font-bold text-white tracking-wide my-5">
            {toy.toyName}
            <div className="w-28 h-1 mx-auto mt-2 bg-linear-to-r from-blue-600 to-blue-800 rounded-full shadow-md"></div>
          </h1>
          <div className="flex justify-center items-center">
            <img
              src={toy.pictureURL}
              alt="Shoes"
              className="object-cover w-[350px] h-[350px] rounded-md"
            />
          </div>
          <div className="flex justify-center items-center gap-5 my-10">
            <p className="badge badge-soft badge-accent text-2xl p-5 font-semibold">
              ${toy.price}
            </p>
            <p className="badge badge-soft badge-accent text-2xl p-5 font-semibold">
              <CiStar />
              {toy.rating}
            </p>
            <p className="badge badge-soft badge-accent text-2xl p-5 font-semibold">
              Stock: {toy.availableQuantity}
            </p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-center items-center flex-col min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-74px)]">
          <h1 className="text-center text-3xl font-bold text-red-400 tracking-wide my-5">
            Toy Not Found
            <div className="w-28 h-1 mx-auto mt-2 bg-linear-to-r from-blue-600 to-blue-800 rounded-full shadow-md"></div>
          </h1>
          <Link to={"/"} className="btn btn-info">
            Go Home
          </Link>
        </div>
      </>
    );
  }
};

export default ToyDetails;
