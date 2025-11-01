import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <Location />
      <Footer />
      <ScrollToTop />
      {/* Add About, Rooms, etc. sections here */}
    </div>
  );
}

export default App;
