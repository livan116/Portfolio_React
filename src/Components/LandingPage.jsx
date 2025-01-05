import React from "react";
import profile from "../assets/profile.jpg";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="LandingContainer bg-gray-900 text-white">
      <div className="myInfo">
        <h1 className="hiHead">Hi! I'm</h1>
        <h1 className="myName">Livan Kumar</h1>
        <p className="myDesc">my Info</p>
        <button className="seeMoreBtn">See More...</button>
      </div>
      <div className="landingImg w-6/12 flex justify-end items-center">
        <div className="imgLand">
          <img src={profile} alt="profile" className="rounded-full object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
