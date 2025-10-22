import React, { useEffect } from "react";
import { Link } from "react-router";

const NotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found | Toy Verse `;
  }, []);

  return (
    <div className="flex justify-center items-center flex-col min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-74px)]">
      <h1 className="text-center text-3xl font-bold text-red-400 tracking-wide my-5">
        Page Not Found
        <div className="w-28 h-1 mx-auto mt-2 bg-linear-to-r from-blue-600 to-blue-800 rounded-full shadow-md"></div>
      </h1>
      <Link to={"/"} className="btn btn-info">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
