import React from "react";
import { useParams } from "react-router-dom";

const GalleryDetail = () => {
  const { id } = useParams();
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

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Item Not Found</h1>
        <p>The item you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{item.title}</h1>
      <img
        src={item.imageUrl}
        alt={item.title}
        style={{ width: "300px", display: "block", margin: "20px auto" }}
      />
      <p>
        <strong>Name:</strong> {item.name}
      </p>
      <p>
        <strong>Category:</strong> {item.category}
      </p>
      <p>
        <strong>Description:</strong> {item.description}
      </p>
    </div>
  );
};

export default GalleryDetail;
