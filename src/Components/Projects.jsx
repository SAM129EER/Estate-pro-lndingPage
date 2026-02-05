import React, { useState, useEffect } from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
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
    <div className="container px-6 py-16 pt-32 mx-auto overflow-hidden md:px-20 lg:px-34 my-full" id="Projects">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
          Projects <span className="text-blue-600">Completed</span>
        </h1>
        <p className="text-lg font-medium text-gray-600">Crafting Spaces, Proving Our Work</p>
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
            className="p-2 transition-all duration-300 bg-white rounded-full shadow-md hover:bg-gray-50 hover:shadow-lg"
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
            className="p-2 transition-all duration-300 bg-white rounded-full shadow-md hover:bg-gray-50 hover:shadow-lg"
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
                className="p-4 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:scale-105"
              >
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-48 mb-4 transition-transform duration-500 rounded-lg hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="mt-4 text-xl font-bold text-gray-800">{project.title}</h3>
                  <p className="mt-2 font-semibold text-blue-600">{project.price}</p>
                  <p className="mt-1 text-gray-600">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
