import React from "react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-white pt-5 pb-8 px-6 md:px-20">
      <h1 className="text-center text-3xl mb-5 font-semibold">Toy Verse</h1>
      <div className="flex flex-col md:flex-row md:justify-evenly gap-12 md:gap-6">
        <div className="flex space-x-8 justify-start items-start">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="text-gray-400 text-sm flex flex-col gap-2">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">
                Terms And Conditions
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <ul className="text-gray-400 text-sm flex flex-col gap-3">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaXTwitter /> @ToyVerse
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaLinkedin /> @ToyVerse
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaFacebook /> @ToyVerse
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <IoMailOutline /> admin@ToyVerse
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 opacity-50 my-8"></div>
      <p className="text-center text-gray-400 text-sm">
        © 2025 Toy Verse | All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
