import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center flex flex-col w-full overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/header_img.png')",
      }}
      id="Header"
    >
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center container text-center px-6 py-4 mx-auto md:px-20 lg:px-32 text-white">
        <h1 className="text-5xl sm:text-6xl font-bold max-w-4xl mb-8 md:text-[84px] leading-tight">
          Explore Homes that fit your dreams
        </h1>
        <div className="space-x-6 mt-12">
          <a
            href="#Projects"
            className="inline-block px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="inline-block px-8 py-3 border-2 border-blue-600 bg-blue-600 rounded-full hover:bg-blue-700 hover:border-blue-700 transition-colors"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
