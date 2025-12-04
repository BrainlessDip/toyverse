import React from "react";

const Stats = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-center text-3xl font-bold text-white tracking-wide my-5">
        Stats
        <div className="w-28 h-1 mx-auto mt-2 bg-linear-to-r from-blue-600 to-blue-800 rounded-full shadow-md"></div>
      </h1>
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-200 rounded-2xl p-6 text-center">
        <div className="stat">
          <div className="stat-title">Total Users</div>
          <div className="stat-value text-primary">12.3K</div>
          <div className="stat-desc">Last 30 days: +3.7%</div>
        </div>

        <div className="stat">
          <div className="stat-title">Monthly Visits</div>
          <div className="stat-value text-secondary">89K</div>
          <div className="stat-desc">Steadily increasing</div>
        </div>

        <div className="stat">
          <div className="stat-title">Ratings</div>
          <div className="stat-value text-accent">4.9★</div>
          <div className="stat-desc">Based on 5,800 reviews</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Conversions</div>
          <div className="stat-value">7,421</div>
          <div className="stat-desc text-success">+14% efficiency</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
