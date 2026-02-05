import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showmobile, setshowmobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showmobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showmobile]);

  const AuthModal = () => (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <img
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            onClick={() => setShowAuthModal(false)}
            alt="Close"
          />
        </div>

        <div className="flex gap-4 mb-6">
          <button
            className={`flex-1 py-2 rounded-full ${
              isLogin ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 rounded-full ${
              !isLogin ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <img
          src={isScrolled ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-32 transition-opacity duration-300"
        />
        <ul className="hidden md:flex gap-8 font-medium">
          <a
            href="#Header"
            onMouseEnter={() => setActiveItem("home")}
            onMouseLeave={() => setActiveItem(null)}
            className={`cursor-pointer transition-all duration-300 relative
              ${isScrolled ? "text-gray-800" : "text-white"}
              ${activeItem === "home" ? "text-blue-600" : ""}
            `}
          >
            Home
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 
              ${activeItem === "home" ? "scale-x-100" : "scale-x-0"}`}
            />
          </a>
          <a
            href="#About"
            onMouseEnter={() => setActiveItem("about")}
            onMouseLeave={() => setActiveItem(null)}
            className={`cursor-pointer transition-all duration-300 relative
              ${isScrolled ? "text-gray-800" : "text-white"}
              ${activeItem === "about" ? "text-blue-600" : ""}
            `}
          >
            About
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 
              ${activeItem === "about" ? "scale-x-100" : "scale-x-0"}`}
            />
          </a>
          <a
            href="#Projects"
            onMouseEnter={() => setActiveItem("projects")}
            onMouseLeave={() => setActiveItem(null)}
            className={`cursor-pointer transition-all duration-300 relative
              ${isScrolled ? "text-gray-800" : "text-white"}
              ${activeItem === "projects" ? "text-blue-600" : ""}
            `}
          >
            Projects
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 
              ${activeItem === "projects" ? "scale-x-100" : "scale-x-0"}`}
            />
          </a>
          <a
            href="#Testimonials"
            onMouseEnter={() => setActiveItem("testimonials")}
            onMouseLeave={() => setActiveItem(null)}
            className={`cursor-pointer transition-all duration-300 relative
              ${isScrolled ? "text-gray-800" : "text-white"}
              ${activeItem === "testimonials" ? "text-blue-600" : ""}
            `}
          >
            Testimonials
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 
              ${activeItem === "testimonials" ? "scale-x-100" : "scale-x-0"}`}
            />
          </a>
        </ul>
        <button
          onClick={() => setShowAuthModal(true)}
          className="hidden md:block px-8 py-2.5 rounded-full font-medium transition-all bg-blue-600 text-white hover:bg-blue-700"
        >
          Sign Up
        </button>
        <img
          onClick={() => setshowmobile(true)}
          src={isScrolled ? assets.menu_icon : assets.menu_icon}
          alt="Menu"
          className="md:hidden cursor-pointer w-7"
        />
      </div>

      {/* Mobile Menu - with similar hover effects */}
      <div
        className={`
        md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300
        ${showmobile ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setshowmobile(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="Close"
          />
        </div>
        <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-medium">
          {["Home", "About", "Projects", "Testimonials"].map((item) => (
            <a
              key={item}
              onClick={() => setshowmobile(false)}
              href={`#${item === "Home" ? "Header" : item}`}
              onMouseEnter={() => setActiveItem(item.toLowerCase())}
              onMouseLeave={() => setActiveItem(null)}
              className={`px-4 py-2 relative transition-all duration-300
                ${
                  activeItem === item.toLowerCase()
                    ? "text-blue-600"
                    : "text-gray-800"
                }
              `}
            >
              {item}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 
                ${
                  activeItem === item.toLowerCase()
                    ? "scale-x-100"
                    : "scale-x-0"
                }`}
              />
            </a>
          ))}
          <button
            onClick={() => {
              setShowAuthModal(true);
              setshowmobile(false);
            }}
            className="bg-blue-600 text-white px-8 py-2.5 rounded-full hover:bg-blue-700 transition-colors mt-4"
          >
            Sign Up
          </button>
        </ul>
      </div>

      {showAuthModal && <AuthModal />}
    </div>
  );
};

export default Navbar;
