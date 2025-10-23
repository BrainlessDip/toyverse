import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const ReviewCard = ({ data }) => {
  const { name, rating, feedback } = data;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      className="bg-liner-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-5 shadow-md hover:shadow-blue-900"
      data-aos="fade-up"
    >
      <div className="flex items-center gap-4 mb-3">
        <img
          src="https://img.icons8.com/?size=100&id=fUUEbUbXhzOA&format=png&color=ffffff"
          alt={name}
          className="w-12 h-12 rounded-full border border-blue-500"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <div className="flex justify-start items-center gap-1 text-yellow-400">
            {rating} <FaStar />
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-md ">“{feedback}”</p>
    </div>
  );
};

export default ReviewCard;
