import React, { useEffect } from "react";
import { toast } from "react-toastify";

const Feedback = () => {
  useEffect(() => {
    document.title = `Feedback | Toy Verse`;
  }, []);

  const handleFeedback = (e) => {
    e.preventDefault();
    toast.success("Thanks for sharing your feedback!");
    e.target.reset();
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold text-white tracking-wide my-5">
        Share Your Feedback
        <div className="w-28 h-1 mx-auto mt-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-md"></div>
      </h1>
      <div className="flex justify-center items-center flex-col relative">
        <div className="flex justify-center items-center my-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <form onSubmit={handleFeedback}>
              <textarea
                name="feedback"
                className="textarea textarea-bordered w-full focus:outline-0"
                placeholder="Write your feedback here..."
                autoComplete="off"
                required
                rows="3"
              />
              <button className="btn btn-neutral mt-5 w-full">Submit</button>
            </form>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default Feedback;
