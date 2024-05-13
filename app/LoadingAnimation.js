"use client";
import React from "react";
import "./globals.css";

const LoadingAnimation = () => {
  return (
    <div className="pl-20 lg:max-container lg:padding-container text-center py-72 mr-32" >
      <div className="lds-spinner mb-10">
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
      <p className="mt-2 ml-10">Loading...</p>
    </div>
  );
};

export default LoadingAnimation;
