import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Proects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden ">
      <Navbar />
      <Header />
      <About />
      <Proects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
