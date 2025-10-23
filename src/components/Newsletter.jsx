import React, { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully 🎉");
    setEmail("");
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-center text-3xl font-bold text-white tracking-wide my-5">
        Join the ToyVerse Newsletter
        <div className="w-28 h-1 mx-auto mt-2 bg-linear-to-r from-blue-600 to-blue-800 rounded-full shadow-md"></div>
      </h1>

      <div>
        <form
          onSubmit={handleSubscribe}
          className="flex w-full max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 w-4/5 p-3 rounded-l-3xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1"
            required
          />
          <button
            type="submit"
            className="bg-black w-1/5 font-semibold rounded-r-3xl p-3 flex items-center justify-center"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
