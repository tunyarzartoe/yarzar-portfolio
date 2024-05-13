"use client";
import React from "react";
import "./globals.css";

const LoadingAnimation = () => {
  return (
    <div className="max-container padding-container text-center py-72" >
      <div className="lds-spinner mb-4">
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
      <p className="mt-2 ml-5">Loading...</p>
    </div>
  );
};

export default LoadingAnimation;
