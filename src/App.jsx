import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Proects from "./Components/Proects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/contect";
import Footer from "./Components/footer";

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