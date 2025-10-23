import React, { useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { Link, useLoaderData, useParams } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

const ToyDetails = () => {
  const toys = useLoaderData().data;
  const { toyId } = useParams();
  const toy = toys.find((toy) => toyId == toy.toyId);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    document.title = `${toy?.toyName || "Toy Not Found"} | Toy Verse`;
  }, [toy]);

  const handleTryNow = (e) => {
    e.preventDefault();
    toast.success("Thanks for trying our product!");
    e.target.reset();
  };

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
          <div
            className="flex justify-center items-center gap-2 my-10"
            data-aos="zoom-in-up"
          >
            <p className="badge badge-soft badge-accent text-[18px] p-5 font-semibold">
              ${toy.price}
            </p>
            <p className="badge badge-soft badge-accent text-[18px] p-5 font-semibold">
              <CiStar />
              {toy.rating}
            </p>
            <p className="badge badge-soft badge-accent text-[18px] p-5 font-semibold">
              Stock: {toy.availableQuantity}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mb-10">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend text-2xl">Try Now</legend>
            <form className="space-y-3" onSubmit={handleTryNow}>
              <input
                type="text"
                className="input focus:outline-0"
                name="name"
                placeholder="Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                className="input focus:outline-0"
                name="email"
                placeholder="Email"
                autoComplete="username"
                required
              />
              <button className="btn btn-neutral mt-0 w-full">Try Now</button>
            </form>
          </fieldset>
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
