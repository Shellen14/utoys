import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const GalleryFakhri = () => {
  const items = [
    {
      id: 1, // Add a unique ID
      imageUrl:
        "https://i.pinimg.com/736x/ed/22/1e/ed221e92254431b5b48972e0c017803f.jpg",
      name: "Calvin Renaldo",
      title: "Canvas of Chaos",
      category: "Category",
    },
    {
      id: 2,
      imageUrl:
        "https://i.pinimg.com/474x/fe/f7/f4/fef7f4a9f23c741245d82625a33ae103.jpg",
      name: "Dzaky Chesta",
      title: "Monochrome Lament",
      category: "Category",
    },
    {
      id: 3,
      imageUrl:
        "https://i.pinimg.com/236x/19/42/fe/1942fe4fc33d98082a96cefb0c3422b5.jpg",
      name: "Shellen Putri",
      title: "Chromatic Echo",
      category: "Category",
    },
  ];

  return (
    <div className="gallery">
      <div className="top-main">
        <div className="title">Gallery</div>
        <div className="menu-item">
          <button className="category">Category</button>
          <i className="fas fa-search"></i>
          <span> Search</span>
        </div>
      </div>
      <div className="main-item">
        {items.map((item) => (
          <div key={item.id} className="main-item-item">
            <img src={item.imageUrl} alt={item.title} />
            <p className="nama">
              <strong>Name: </strong>
              {item.name}
            </p>
            <h3 className="judul">
              <strong>Title: </strong>
              {item.title}
            </h3>
            <p className="desc-gal">
              <strong>Category: </strong>
              {item.category}
            </p>
            {/* Add a link to the dynamic route */}
            <Link to={`/gallery/${item.id}`} className="viewMore">
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryFakhri;
