import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Minds from "./components/Minds";
import GalleryWidget from "./components/GalleryWidget";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <GalleryWidget />
      <Footer />
    </div>
  );
}

export default App;
