import React from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Aarav Sen",
    rating: 5,
    feedback:
      "ToyVerse is amazing! My little brother loves the interactive toy section ❤️",
  },
  {
    name: "Rafiul Islam",
    rating: 5,
    feedback:
      "Such a fun site! I found my childhood favorites and even discovered new toys I’d never heard of!",
  },
  {
    name: "Maya Das",
    rating: 4,
    feedback:
      "Loved the bright colors and design. It feels like stepping into a digital toy store!",
  },
  {
    name: "Aditya Paul",
    rating: 5,
    feedback:
      "The search and category filters are smooth! Makes finding toys super easy and fun 🔍",
  },
  {
    name: "Nusrat Noor",
    rating: 5,
    feedback:
      "ToyVerse feels like a universe of memories! I ended up browsing for hours 😍",
  },
  {
    name: "Tuhin Ahmed",
    rating: 4,
    feedback:
      "Everything loads fast and looks clean. Would love a wishlist feature next!",
  },
  {
    name: "Riya Kar",
    rating: 5,
    feedback:
      "Absolutely loved the Popular Toys section — it really helps me choose gifts for my cousins 🎁",
  },
  {
    name: "Kartik Dev",
    rating: 3,
    feedback:
      "Good experience overall, but I think adding more educational toys would make it perfect.",
  },
  {
    name: "Ananya Saha",
    rating: 5,
    feedback:
      "The animations and toy images are adorable! ToyVerse is pure nostalgia 💫",
  },
];

const CustomerReviews = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-center text-3xl font-bold text-white tracking-wide my-5">
        Customer Reviews
        <div className="w-28 h-1 mx-auto mt-2 bg-linear-to-r from-blue-600 to-blue-800 rounded-full shadow-md"></div>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {reviews.map((review, index) => (
          <ReviewCard key={index} data={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
