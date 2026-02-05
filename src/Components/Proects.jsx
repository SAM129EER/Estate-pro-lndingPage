import React, { useState, useEffect } from "react";
import { assets, projectsData } from "../assets/assets";

const Proects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const projectsPerView = 3;

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        handleSlideChange('next');
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  const handleSlideChange = (direction) => {
    setIsAnimating(true);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prevIndex) => 
          prevIndex === projectsData.length - projectsPerView ? 0 : prevIndex + 1
        );
      } else {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? projectsData.length - projectsPerView : prevIndex - 1
        );
      }
      setIsAnimating(false);
    }, 200);
  };

  const visibleProjects = () => {
    const projects = [];
    for (let i = 0; i < projectsPerView; i++) {
      const index = (currentIndex + i) % projectsData.length;
      projects.push(projectsData[index]);
    }
    return projects;
  };

  return (
    <div className="container mx-auto py-16 pt-32 px-6 md:px-20 lg:px-34 my-full overflow-hidden" id="Projects">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Projects <span className="text-blue-600">Completed</span>
        </h1>
        <p className="text-gray-600 text-lg font-medium">Crafting Spaces, Proving Our Work</p>
      </div>

      <div 
        className="relative mb-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <button 
            onClick={() => handleSlideChange('prev')}
            aria-label="Previous" 
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 hover:shadow-lg"
          >
            <img 
              src={assets.left_arrow} 
              alt="Previous" 
              className="w-6 h-6"
            />
          </button>
          <button 
            onClick={() => handleSlideChange('next')}
            aria-label="Next"
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 hover:shadow-lg"
          >
            <img 
              src={assets.right_arrow} 
              alt="Next" 
              className="w-6 h-6"
            />
          </button>
        </div>

        <div className="flex items-center justify-center">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {visibleProjects().map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-4 transform transition-all duration-300 hover:scale-105"
              >
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mt-4">{project.title}</h3>
                  <p className="text-blue-600 font-semibold mt-2">{project.price}</p>
                  <p className="text-gray-600 mt-1">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proects;
