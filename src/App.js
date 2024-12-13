import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import "./App.css";
import Main from "./pages/Main/Main";
import GalleryFakhri from "./pages/Gallery/GalleryFakhri";
import GalleryDetail from "./pages/Gallery/GalleryDetail";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<GalleryFakhri />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;