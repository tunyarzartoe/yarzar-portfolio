import { useState } from "react";
import Image from "next/image";
import profile_img from "../../public/profile.jpg";

export const ImageViewModal = ({ closeModal }) => {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter transition-opacity`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="relative bg-white w-full max-w-xl rounded-lg overflow-hidden">
          <div className="flex justify-between p-4">
            <h5 className="text-zinc-950 font-bold text-center" id="exampleModalLabel">
              Tun Yar Zar Toe
            </h5>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={closeModal}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-4 py-2">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={profile_img}
                alt="profile_image"
                className="object-cover w-full h-full"
                fetchPriority="eager"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
