import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        lacinia, odio ut lacinia fringilla, lectus dolor tempor ligula, sit amet
        viverra purus nibh sed nibh.
      </p>
      <div className="small-images">
        <img
          src="https://i.pinimg.com/236x/fb/39/9e/fb399eccd6ebfe4cb11e0e4a4d8151b3.jpg"
          alt="Small Placeholder"
          className="small-image"
        />
        <img
          src="https://i.pinimg.com/236x/21/a2/02/21a202e5700f7381eb5e9886e320fd5b.jpg"
          alt="Small Placeholder"
          className="small-image"
        />
      </div>
      <p className="about-us-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        lacinia, odio ut lacinia fringilla, lectus dolor tempor ligula, sit amet
        viverra purus nibh sed nibh. Pellentesque dapibus tortor id venenatis
        vehicula. Aenean commodo nisi at semper accumsan. Suspendisse quis
        egestas turpis. Etiam ut volutpat lectus. Quisque rhoncus diam ac
        euismod lobortis. Phasellus sit amet tincidunt neque, bibendum molestie
        libero.
      </p>
    </div>
  );
};

export default AboutUs;
