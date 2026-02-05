import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="container flex flex-col items-center justify-center w-full overflow-hidden mx:auto p-14 md:px-20 lg-px-32"
      id="About"
    >
      <div className="container px-6 py-4 pt-20 mx-auto md:px-20 lg:px-34">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-lg font-medium text-gray-600">
            Building Trust Through Excellence
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="md:w-1/2">
            <img
              src={assets.brand_img}
              alt="Brand Image"
              className="object-cover w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2">
            <div className="grid w-full grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-md md:gap-10">
              <div className="p-4 text-center transition-colors rounded-lg hover:bg-gray-50">
                <p className="mb-2 text-4xl font-bold text-blue-600">10+</p>
                <p className="font-medium text-gray-600">Years of Experience</p>
              </div>
              <div className="p-4 text-center transition-colors rounded-lg hover:bg-gray-50">
                <p className="mb-2 text-4xl font-bold text-blue-600">12+</p>
                <p className="font-medium text-gray-600">Projects Completed</p>
              </div>
              <div className="p-4 text-center transition-colors rounded-lg hover:bg-gray-50">
                <p className="mb-2 text-4xl font-bold text-blue-600">20+</p>
                <p className="font-medium text-gray-600">
                  Mn. ft. sq. Delivered
                </p>
              </div>
              <div className="p-4 text-center transition-colors rounded-lg hover:bg-gray-50">
                <p className="mb-2 text-4xl font-bold text-blue-600">25+</p>
                <p className="font-medium text-gray-600">Ongoing Projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 mt-12 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Vision</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
            Welcome to our premier real estate platform, where we transform your
            property dreams into reality. With over a decade of expertise, we
            specialize in connecting buyers with their perfect homes and helping
            sellers maximize their property's potential. Our dedicated team
            ensures transparent, efficient, and professional service throughout
            your real estate journey.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
