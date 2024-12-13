import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const GalleryFakhri = () => {
  const items = [
    {
      id: 1, // Add a unique ID
      imageUrl:
        "https://i.pinimg.com/736x/bf/59/29/bf5929324e682886037420a9cc4db246.jpg",
      name: "Calvin Renaldo",
      title: "Canvas of Chaos",
      category: "Category",
    },
    {
      id: 2,
      imageUrl:
        "https://i.pinimg.com/474x/42/f6/cb/42f6cb28d28b8b99f88a8df2f7bcdaca.jpg",
      name: "Dzaky Chesta",
      title: "Monochrome Lament",
      category: "Category",
    },
    {
      id: 3,
      imageUrl:
        "https://i.pinimg.com/736x/06/e2/08/06e208ef91c3de8ed44ecc875613faac.jpg",
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
