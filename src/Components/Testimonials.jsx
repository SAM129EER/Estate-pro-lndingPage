import React, { useState } from 'react';
import { testimonialsData, assets } from '../assets/assets';

function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto py-8 pt-12 pb-20 px-6 md:px-20 lg:px-34" id="Testimonials">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Customer <span className="text-blue-600">Testimonials</span>
        </h1>
        <p className="text-gray-600 text-lg font-medium">
          Real Stories from Those who found Home with us
        </p>
      </div>

      <div className="flex justify-end mb-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300">
          See More
        </button>
      </div>

      <div className="flex justify-center items-center gap-6 min-h-[400px]">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`
              transform transition-all duration-500 ease-in-out
              ${hoveredIndex === null ? 'w-[28%]' : ''}
              ${hoveredIndex === index ? 'w-[32%] translate-x-0 scale-105 z-20' : ''}
              ${hoveredIndex !== null && hoveredIndex !== index ? 
                index < hoveredIndex ? 'w-[22%] -translate-x-8 scale-95 opacity-50' : 
                'w-[22%] translate-x-8 scale-95 opacity-50' : ''}
              bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-50"
              />
              <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{testimonial.title}</p>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <img
                    key={i}
                    src={assets.star_icon}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-center leading-relaxed text-sm">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
