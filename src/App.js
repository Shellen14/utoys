import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/HeaderFakhri";
// import Content from "./components/ContentJakiPahri";
// import PhotoGallery from "./components/PhotoGallery";
// import Submission_Shellen from "./components/SubmissionShellen";
import Gallery from "./pages/Gallery/Gallery";
import "./App.css";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Header />} />
          <Route path='/' element={<Content />} />
          <Route path='/' element={<PhotoGallery />} />
          <Route path='/' element={<Submission_Shellen />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
      {/* <main>
        <Header />
        <Content />
        <PhotoGallery />
      </main>
      <div className='page-2'>
        <Submission_Shellen />
      </div> */}
    </div>
  );
}

export default App;
