import React, { useEffect } from "react";
import { Link } from "react-router";

const About = () => {
  useEffect(() => {
    document.title = `About | Toy Verse`;
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-3xl font-bold text-white tracking-wide my-5">
        About Toy Verse
        <div className="w-28 h-1 mx-auto mt-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-md"></div>
      </h1>
      <p className="text-left text-gray-200 leading-relaxed mt-4">
        Welcome to{" "}
        <span className="font-semibold text-blue-400">Toy Verse</span> - a
        vibrant universe of creativity, imagination, and fun! Here, toys come
        alive through stories, collections, and adventures. Whether you’re a
        passionate collector, a curious kid at heart, or someone discovering
        unique playtime ideas, Toy Verse is your ultimate destination.
      </p>

      <p className="text-left text-gray-300 mt-4">
        Our mission is to bring together toy enthusiasts from all over the world
        and celebrate the joy of play. From classic favorites to the latest
        trends, we curate everything that makes your toy world colorful and
        exciting.
      </p>

      <p className="text-left text-gray-300 mt-4">
        Want to explore more? Visit our{" "}
        <Link to="/" className="text-blue-400 hover:underline">
          Toy Collection
        </Link>{" "}
        page or join our{" "}
        <Link to="/" className="text-blue-400 hover:underline">
          Community
        </Link>{" "}
        to connect with fellow toy lovers!
      </p>
    </div>
  );
};

export default About;
