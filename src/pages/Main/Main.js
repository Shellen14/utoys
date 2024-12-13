import React from "react";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import PhotoGallery from "../../components/Photo/Photo";
import Submission_Shellen from "../../components/Submission/Submission";
import Event from "../../components/Event/Event";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import YouTubeIframe from "../../components/YouTubeIframe/YouTubeIframe";
import WorldTime from "../../components/WorldTime/WorldTime";

const Main = () => {
  return (
    <div>
      <Header />
      <Content />
      <PhotoGallery />
      <YouTubeIframe videoId="3XplTmSTwG8" />
      <Submission_Shellen />
      <Event/>
      <AboutUs/>
      <WorldTime />
      <Footer/>
    </div>
  );
};

export default Main;
