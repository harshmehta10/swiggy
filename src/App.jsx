import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Minds from "./components/Minds";
import GalleryWidget from "./components/GalleryWidget";
import Footer from "./components/Footer";
import TopRestaurants from "./components/TopRestaurants";
import Best from "./components/Best";
import Restaurants from "./components/Restaurants";

function App() {
  return (
    <div>
      <Navbar />
      <GalleryWidget />
      <TopRestaurants />
      <Restaurants />
      <Best />
      <Footer />
    </div>
  );
}

export default App;
