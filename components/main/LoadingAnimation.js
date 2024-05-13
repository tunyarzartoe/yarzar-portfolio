"use client";
import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="max-container padding-container text-center">
      <div class="lds-spinner ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="">Loading...</p>
    </div>
  );
};

export default LoadingAnimation;
